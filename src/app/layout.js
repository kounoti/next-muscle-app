import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "NEXT-PRACTICE-MUSCLE-APP",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="mb-6">{children}</main>
        {/* Headerと被らないようにpadding(mt-12とmd:12)を設けた
        Footerと被らないようにpadding(mb-6)を設けた */}

        <Footer />
      </body>
    </html>
  );
}
