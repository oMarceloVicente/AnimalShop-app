import Header from "@/layouts/dashboard/header";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
          <Header>{children}</Header>
      </body>
    </html>
  );
};

export default MainLayout;
