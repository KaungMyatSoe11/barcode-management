import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import Link from "next/link";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Link href={"/"}>Home Page</Link>
          <Link href={"/member/list"}>Member page</Link>
          <Link href={"/member/create"}>Create page</Link>
        </header>
        <Providers>
          <div className="container mx-auto">{children}</div>
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  );
}
