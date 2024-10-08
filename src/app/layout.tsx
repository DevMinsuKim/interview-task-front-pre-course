import "./globals.css";
import React from "react";
import LayoutRecoil from "./layout.recoil";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../../public/assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata = {
  title: "myfair front pre-course",
  description: "todolist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pretendard.className}`}>
      <body>
        <LayoutRecoil>{children}</LayoutRecoil>
      </body>
    </html>
  );
}
