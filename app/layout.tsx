import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exagon-Soft SSL",
  description: "Always learning... Always evolving... EVERY DAY BETTER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Exagon-Soft</title>
        <meta name="title" content="Exagon-Soft" />
        <meta
          name="description"
          content="Turning code into magic.
Delivering Custom Software and Innovative Technology to Propel Your Business Forward"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exagon-soft.com/" />
        <meta property="og:title" content="Exagon-Soft" />
        <meta
          property="og:description"
          content="Turning code into magic.
Delivering Custom Software and Innovative Technology to Propel Your Business Forward"
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.exagon-soft.com/" />
        <meta property="twitter:title" content="Exagon-Soft" />
        <meta
          property="twitter:description"
          content="Turning code into magic.
Delivering Custom Software and Innovative Technology to Propel Your Business Forward"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta
          name="keywords"
          content="software, developer, frontend, full stack, Next js, cloud"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="Alvaro R Martin" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
