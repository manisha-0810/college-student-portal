"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import ThemeToggle from "@/components/theme-toggle";
import { Icon } from "@/components/icons";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const result = await signIn("credentials", { usn: String(formData.get("usn") ?? ""), password: String(formData.get("password") ?? ""), redirect: false });
    setLoading(false);
    if (result?.error) { setError("Invalid USN or password."); return; }
    router.push("/dashboard");
    router.refresh();
  }
  return <main className="grid min-h-screen bg-slate-50 dark:bg-slate-950 lg:grid-cols-2"><section className="relative hidden overflow-hidden bg-[#171a34] p-12 lg:flex lg:flex-col lg:justify-between"><div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-500/30 blur-3xl"/><div className="relative flex items-center gap-3 text-white"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500 text-xl font-black">C</span><span className="text-xl font-bold">Campus Hub</span></div><div className="relative max-w-md"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Student portal</p><h1 className="text-5xl font-bold leading-tight text-white">Everything campus, in one clear place.</h1><p className="mt-5 text-lg leading-8 text-slate-300">Track your classes, academic progress, attendance and fees without the paper chase.</p></div><p className="relative text-sm text-slate-400">© 2025 Campus Hub · Built for students</p></section><section className="relative flex items-center justify-center p-5 sm:p-10"><div className="absolute right-5 top-5"><ThemeToggle/></div><div className="w-full max-w-md"><div className="mb-10 lg:hidden"><div className="flex items-center gap-3 text-slate-900 dark:text-white"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500 text-xl font-black text-white">C</span><span className="text-xl font-bold">Campus Hub</span></div></div><h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome back</h2><p className="mt-2 text-slate-500 dark:text-slate-400">Sign in to access your student portal.</p><form onSubmit={login} className="mt-8 space-y-5"><label className="block text-sm font-medium text-slate-700 dark:text-slate-300">USN<input required name="usn" type="text" placeholder="1CH24CS001" autoComplete="username" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 uppercase outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-slate-700 dark:bg-slate-900"/></label><label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password<input required name="password" type="password" placeholder="••••••••" autoComplete="current-password" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-slate-700 dark:bg-slate-900"/></label><div className="flex items-center justify-between text-sm"><label className="flex items-center gap-2 text-slate-500"><input type="checkbox" className="accent-violet-500"/> Remember me</label><button type="button" className="font-medium text-violet-600">Forgot password?</button></div>{error && <p role="alert" className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700 dark:bg-rose-950 dark:text-rose-300">{error}</p>}<button disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-70">{loading ? "Signing in…" : <>Sign in <Icon name="arrow" className="h-4 w-4"/></>}</button></form><p className="mt-6 text-center text-xs text-slate-400">Demo login: USN <b>1CH24CS001</b> · Password <b>student123</b></p></div></section></main>;
}
