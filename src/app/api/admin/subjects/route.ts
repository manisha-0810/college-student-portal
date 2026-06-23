import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
export async function GET() { if (!await requireAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); return NextResponse.json(await prisma.subject.findMany({ orderBy: { code: "asc" } })); }
export async function POST(request: Request) { if (!await requireAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); try { const { code, name, credits } = await request.json(); if (![code, name].every((value) => typeof value === "string" && value.trim()) || !Number(credits)) throw new Error(); return NextResponse.json(await prisma.subject.create({ data: { code: code.trim().toUpperCase(), name: name.trim(), credits: Number(credits) } }), { status: 201 }); } catch { return NextResponse.json({ error: "Unable to add subject." }, { status: 400 }); } }
