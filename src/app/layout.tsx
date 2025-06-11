import type { Metadata } from "next";
import "./globals.css";
import { Share_Tech_Mono } from 'next/font/google'
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { cookies } from "next/headers";
import React, { Suspense } from "react";
import { RefineContext } from "./_refine_context";
import "./globals.css";
import ReactQueryProvider from "../providers/reactquery"; 





const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: '400', // 'Share Tech Mono' only has 400 weight
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Peniel Alemayehu - My Portfolio",
  description: "My Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  return (
    <html lang="en" className={shareTechMono.className}>
      <body>
        {/* Place your custom font <link> tags here if needed */}
        <Suspense>
          <AntdRegistry>
            <ReactQueryProvider>
              <RefineContext defaultMode={theme?.value}>{children}</RefineContext>
            </ReactQueryProvider>
          </AntdRegistry>
        </Suspense>
      </body>
    </html>
  );
}
