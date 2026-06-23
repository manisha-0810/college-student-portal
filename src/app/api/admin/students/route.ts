import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";

export async function GET() { if (!await requireAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); return NextResponse.json(await prisma.student.findMany({ select: { id: true, usn: true, name: true, email: true, department: true, semester: true, role: true }, orderBy: { usn: "asc" } })); }
export async function POST(request: Request) { if (!await requireAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); try { const { usn, name, email, department, semester, password } = await request.json(); if (![usn, name, email, department, password].every((value) => typeof value === "string" && value.trim())) throw new Error("All fields are required"); const student = await prisma.student.create({ data: { usn: usn.trim().toUpperCase(), name: name.trim(), email: email.trim().toLowerCase(), department: department.trim(), semester: Number(semester), passwordHash: await hash(password, 12) } }); return NextResponse.json(student, { status: 201 }); } catch { return NextResponse.json({ error: "Unable to add student. Check unique USN/email and form values." }, { status: 400 }); } }
