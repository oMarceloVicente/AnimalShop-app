"use client";

import GuestGuard from "@/auth/guards/guest-guard";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <GuestGuard>{children}</GuestGuard>;
}
