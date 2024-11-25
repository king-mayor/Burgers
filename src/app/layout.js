import {Saira_Condensed} from "next/font/google"
import "./globals.css";

const font = Saira_Condensed({
  weight: ["300","400","500","600","700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Burger | A healthy Food",
  description: "Burger Restauarant Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#f4f1ea]`}
      >
        {children}
      </body>
    </html>
  );
}
