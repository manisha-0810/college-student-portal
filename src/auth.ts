import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const { handlers, auth } = NextAuth({
  trustHost: true,
  session: { strategy: "jwt" },
  pages: { signIn: "/" },
  providers: [
    Credentials({
      name: "Student credentials",
      credentials: {
        usn: { label: "USN", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const usn = typeof credentials?.usn === "string" ? credentials.usn.trim().toUpperCase() : "";
        const password = typeof credentials?.password === "string" ? credentials.password : "";
        if (!usn || !password) return null;

        const student = await prisma.student.findUnique({ where: { usn } });
        if (!student || !student.passwordHash) return null;

        const validPassword = await compare(password, student.passwordHash);
        if (!validPassword) return null;

        return { id: student.id, name: student.name, email: student.email, usn: student.usn, role: student.role };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
  if (user) {
    token.id = String(user.id ?? "");
    token.usn = String(user.usn ?? "");
    token.role = String(user.role ?? "");
  }

  return token;
},
    session({ session, token }) {
         if (session.user) {
         session.user.id = String(token.id ?? "");
         session.user.usn = String(token.usn ?? "");
         session.user.role = String(token.role ?? "");
  }

  return session;
},
  },
});
