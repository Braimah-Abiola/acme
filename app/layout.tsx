import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import { Analytics } from "@vercel/analytics/react";

import Header from "@/components/header/header";
import { cn } from "@/lib/utils";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Acme",
  description: "Acme - The place for all your custom drip",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased overflow-x-hidden w-full my-0", font.className)}
      >
        <ToastProvider />
        <ModalProvider />
        <Header />
        <div className="min-h-screen w-full">
          {children}
          <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  );
}
