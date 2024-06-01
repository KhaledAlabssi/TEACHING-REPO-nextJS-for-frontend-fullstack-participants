import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nextJS Tutorial",
  description: "Learning nextJS is fun", 
  keywords: ['Next.js', 'React', 'TypeScript', 'Coding', 'Node.js'],
  authors: [
    { name: 'Khaled Alabssi', url: 'https://github.com/KhaledAlabssi' }
  ]
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <p>Paragraph before body element!</p> */}
      <body className={inter.className}>
        {/* before childern element */}
        <nav className="bg-gray-300">Welcome toNextJS APP "nav"</nav>
        {children}
        <footer className="bg-gray-300">Welcome to Nextjs App "footer"</footer>
        </body>
      {/* <p>Paragraph after body element!</p> */}
    </html>
  );
}
