import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      usn: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    usn: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    usn: string;
    role: string;
  }
}
