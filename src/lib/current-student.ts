import { cache } from "react";
import { auth } from "@/auth";
import { prisma } from "./prisma";

export const getCurrentStudent = cache(async () => {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthenticated student request");
  return prisma.student.findUniqueOrThrow({
    where: { id: session.user.id },
    select: { id: true, name: true, semester: true },
  });
});
