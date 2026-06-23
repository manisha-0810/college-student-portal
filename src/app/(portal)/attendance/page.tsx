import PageHeader from "@/components/page-header";
import { getCurrentStudent } from "@/lib/current-student";
import { prisma } from "@/lib/prisma";

const colors = ["bg-violet-500", "bg-sky-500", "bg-emerald-500", "bg-amber-500", "bg-rose-500"];

export default async function AttendancePage() {
  const student = await getCurrentStudent();
  const records = await prisma.attendance.findMany({
    where: { studentId: student.id },
    include: { subject: true },
    orderBy: { subject: { code: "asc" } },
  });

  return <><PageHeader title="Attendance" description={`Your attendance record for Semester ${student.semester}.`}/><div className="card overflow-x-auto p-0"><table className="w-full min-w-[620px] text-left text-sm"><thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:bg-slate-800/50"><tr><th className="px-6 py-4">Subject</th><th className="px-6 py-4">Subject code</th><th className="px-6 py-4">Attendance</th><th className="px-6 py-4">Status</th></tr></thead><tbody>{records.map((record, index) => { const onTrack = record.percentage >= 75; return <tr key={record.id} className="border-b border-slate-100 last:border-0 dark:border-slate-800"><td className="px-6 py-5 font-semibold">{record.subject.name}</td><td className="px-6 py-5 text-slate-500">{record.subject.code}</td><td className="px-6 py-5"><div className="flex items-center gap-3"><div className="h-2 w-28 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className={`h-full ${colors[index % colors.length]}`} style={{width:`${record.percentage}%`}}/></div>{record.percentage.toFixed(1)}%</div></td><td className="px-6 py-5"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${onTrack ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" : "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300"}`}>{onTrack ? "On track" : "Needs attention"}</span></td></tr>})}</tbody></table>{records.length === 0 && <p className="p-6 text-sm text-slate-500">No attendance records found.</p>}</div></>;
}
