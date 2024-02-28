import { Manrope } from "next/font/google";
import "./globals.css";
import 'normalize.css/normalize.css';
import './../base.css';
import './../text.css';
import './../variable.css';

const inter =Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "DJUICE",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
