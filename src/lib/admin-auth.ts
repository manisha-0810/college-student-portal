import { auth } from "@/auth";

export async function requireAdmin() {
  const session = await auth();
  return session?.user?.role === "ADMIN" ? session.user : null;
}
