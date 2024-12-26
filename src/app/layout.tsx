import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Link, ViewTransitions } from "next-view-transitions";
const soehne = localFont({
  src: [
    {
      path: "../lib/fonts/soehne-extraleicht.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../lib/fonts/soehne-leicht.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../lib/fonts/soehne-buch.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../lib/fonts/soehne-kraftig.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Nils Bitzer",
  icons: [
    {
      rel: "icon",
      url: "/favicon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${soehne.className} antialiased`}>
          <main className="flex flex-col mt-24 mx-auto w-full max-w-[60ch]">{children}</main>
          <Sidebar />
        </body>
      </html>
    </ViewTransitions>
  );
}

const Sidebar = () => {
  const Item = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
      <Link className="underline text-blue-600 hover:text-blue-500" href={href}>
        {children}
      </Link>
    );
  };

  return (
    <div className="fixed h-screen justify-start right-6 top-0 pt-6 flex flex-col items-end ">
      <p className="mb-6">Nils Bitzer</p>
      <Item href="/about">About</Item>
      <Item href="/links">Links</Item>
    </div>
  );
};
