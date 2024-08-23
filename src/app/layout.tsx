import type { Metadata } from "next";
import React from "react";
// components
import Layout from "./components/Layout";

export const metadata: Metadata = {
  title: "Chain Explorer",
  description:
    "Track gas costs and token details across multiple chains - all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
