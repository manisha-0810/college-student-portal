import PageHeader from "@/components/page-header";
import { getCurrentStudent } from "@/lib/current-student";
import { prisma } from "@/lib/prisma";

function gradeFor(total: number) { if (total >= 90) return "A+"; if (total >= 80) return "A"; if (total >= 70) return "B+"; if (total >= 60) return "B"; return "C"; }

export default async function MarksPage() {
  const student = await getCurrentStudent();
  const records = await prisma.marks.findMany({ where: { studentId: student.id }, include: { subject: true }, orderBy: { subject: { code: "asc" } } });
  const average = records.length ? records.reduce((sum, record) => sum + record.internalMarks + record.finalMarks, 0) / records.length : 0;
  return <><PageHeader title="Marks & grades" description={`Semester ${student.semester} assessment performance.`}/><div className="grid gap-4 sm:grid-cols-3"><Summary label="Average score" value={`${average.toFixed(1)}%`}/><Summary label="Subjects assessed" value={String(records.length)}/><Summary label="Maximum score" value={records.length ? `${Math.max(...records.map(x => x.internalMarks + x.finalMarks))}/100` : "—"}/></div><div className="card mt-6 overflow-x-auto p-0"><table className="w-full min-w-[560px] text-left text-sm"><thead className="border-b border-slate-100 bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:bg-slate-800/50"><tr><th className="px-6 py-4">Subject</th><th className="px-6 py-4">Internal / 30</th><th className="px-6 py-4">Final / 70</th><th className="px-6 py-4">Total / 100</th><th className="px-6 py-4">Grade</th></tr></thead><tbody>{records.map(record => { const total = record.internalMarks + record.finalMarks; return <tr key={record.id} className="border-b border-slate-100 last:border-0 dark:border-slate-800"><td className="px-6 py-5 font-semibold">{record.subject.name}</td><td className="px-6 py-5 text-slate-500">{record.internalMarks}</td><td className="px-6 py-5 text-slate-500">{record.finalMarks}</td><td className="px-6 py-5 font-medium">{total}</td><td className="px-6 py-5"><span className="rounded-lg bg-violet-50 px-2.5 py-1 text-sm font-bold text-violet-700 dark:bg-violet-950 dark:text-violet-300">{gradeFor(total)}</span></td></tr>})}</tbody></table>{records.length === 0 && <p className="p-6 text-sm text-slate-500">No marks records found.</p>}</div></>;
}
function Summary({label,value}:{label:string;value:string}) { return <div className="card"><p className="muted">{label}</p><p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{value}</p></div> }
