import { auth } from "@/auth";
import PortalShell from "@/components/portal-shell";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/");
  if (session.user.role !== "ADMIN") redirect("/dashboard");
  return <PortalShell isAdmin>{children}</PortalShell>;
}
