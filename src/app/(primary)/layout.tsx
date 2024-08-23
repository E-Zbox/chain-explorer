"use client";
import React from "react";
// components
import Navbar from "../components/Navbar";
// styles
import { MainApp } from "../styles/App.styles";

export default function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainApp>
      <Navbar />
      {children}
    </MainApp>
  );
}
