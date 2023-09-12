import "../styles/globals.css";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  icons: '/codebreakers_logo.svg',
  title: "<CodeBreakers/>",
  description: "A Coding Club For Creating The Future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel='shortcut icon' href='/codebreakers_logo.ico'/>
      </Head>
      <body >{children}</body>
    </html>
  );
}
