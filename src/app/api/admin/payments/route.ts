import { NextResponse } from "next/server";
import { PaymentStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
export async function GET() { if (!await requireAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); return NextResponse.json(await prisma.payment.findMany({ include: { student: { select: { name: true, usn: true } } }, orderBy: { paymentDate: "desc" } })); }
export async function POST(request: Request) { if (!await requireAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); try { const { studentId, amount, paymentDate, status } = await request.json(); if (!studentId || !Number(amount) || !paymentDate || !Object.values(PaymentStatus).includes(status)) throw new Error(); return NextResponse.json(await prisma.payment.create({ data: { studentId, amount: String(amount), paymentDate: new Date(paymentDate), status } }), { status: 201 }); } catch { return NextResponse.json({ error: "Provide a valid payment record." }, { status: 400 }); } }
