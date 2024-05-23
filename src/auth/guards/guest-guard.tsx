import { useEffect, useCallback } from "react";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function GuestGuard({ children }: Props) {
  const { status } = useSession();

  return (
    <>{status === "loading" ? "loading" : <Container>{children}</Container>}</>
  );
}

// ----------------------------------------------------------------------

function Container({ children }: Props) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const returnTo = searchParams.get("returnTo") || "/pawstore/home";

  const { status } = useSession();

  const check = useCallback(() => {
    if (status === "authenticated") {
      router.replace(returnTo);
    }
  }, [status, returnTo, router]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
}
