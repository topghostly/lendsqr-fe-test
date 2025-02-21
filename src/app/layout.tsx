import type { Metadata } from "next";
import "../styles/style.scss";
import { UserProvider } from "@/context/users";
import Head from "next/head";

export const metadata: Metadata = {
  title:
    "Loan Management Software for the Smartest Lenders, Banks, and Fintechs in Nigeria",
  description:
    "Explore Lendsqr's loan management software for easy and efficient lending in Nigeria. Streamline your lending operations with our end-to-end solutions.",
  icons: "/images/logoo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/logoo.png" sizes="any" />
      </Head>
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
