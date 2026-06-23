import PortalShell from "@/components/portal-shell";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/");
  return <PortalShell isAdmin={session.user.role === "ADMIN"}>{children}</PortalShell>;
}
