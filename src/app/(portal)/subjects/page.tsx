import PageHeader from "@/components/page-header";
import { Icon } from "@/components/icons";
import { prisma } from "@/lib/prisma";

const accents = ["bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300", "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300", "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300", "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"];

export default async function SubjectsPage() {
  const subjects = await prisma.subject.findMany({ orderBy: { code: "asc" } });
  return <><PageHeader title="My subjects" description="Course catalog for the current academic term."/><div className="grid gap-5 md:grid-cols-2">{subjects.map((subject, index) => <article key={subject.id} className="card transition hover:-translate-y-0.5 hover:shadow-lg"><div className="flex items-start justify-between"><span className={`grid h-11 w-11 place-items-center rounded-xl font-bold ${accents[index % accents.length]}`}>{subject.code.slice(-2)}</span><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500 dark:bg-slate-800">{subject.code}</span></div><h2 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">{subject.name}</h2><p className="mt-1 text-sm text-slate-500">Academic subject</p><div className="mt-5 border-t border-slate-100 pt-4 text-sm text-slate-500 dark:border-slate-800"><p className="flex items-center gap-2"><Icon name="book" className="h-4 w-4 text-violet-500"/>{subject.credits} credits</p></div></article>)}</div>{subjects.length === 0 && <div className="card text-sm text-slate-500">No subjects found.</div>}</>;
}
