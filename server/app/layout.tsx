import type { Metadata } from "next";
import "./globals.css";
import { DebugModeProvider } from "@/components/DebugMode";
import { cookies } from "next/headers";

import { DEBUG_MODE_COOKIE } from "@/app/enableDebugMode/constants";
import { checkSession } from "@/lib/auth";
import { UserProvider } from "@/components/CurrentUser";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Set up the user provider (and also ensure client-side Sentry knows the user, through UserProvider.)
  // NB: we *don't* use auth(), because that'll try to redirect to /login causing a loop
  const user = await checkSession();
  return (
    <html lang="en">
      <body>
        <DebugModeProvider
          value={cookies().get(DEBUG_MODE_COOKIE)?.value === "true"}
        >
          <UserProvider value={user}>
            <main className="max-w-3xl mx-auto">{children}</main>
          </UserProvider>
        </DebugModeProvider>
      </body>
    </html>
  );
}
