import PageHeader from "@/components/page-header";
import { prisma } from "@/lib/prisma";
import AdminConsole from "@/components/admin-console";

export default async function AdminPage() {
  const [students, subjects] = await Promise.all([
    prisma.student.findMany({ select: { id: true, usn: true, name: true, email: true, department: true, semester: true, role: true }, orderBy: { usn: "asc" } }),
    prisma.subject.findMany({ orderBy: { code: "asc" } }),
  ]);
  return <><PageHeader title="Admin console" description="Manage students, academic records, subjects and payments."/><AdminConsole students={students} subjects={subjects}/></>;
}
