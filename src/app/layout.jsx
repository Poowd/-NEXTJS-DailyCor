import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: "300",
});

export const metadata = {
  title: "DailyCor",
  description: "Mark Lape",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${poppinsSans.variable} antialiased bg-neutral-900 text-white flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
