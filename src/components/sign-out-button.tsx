"use client";

import { signOut } from "next-auth/react";
import { Icon } from "./icons";

export default function SignOutButton() {
  return <button onClick={() => signOut({ callbackUrl: "/" })} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm hover:bg-white/10 hover:text-white"><Icon name="logout" className="h-5 w-5"/>Sign out</button>;
}
