import "@/app/globals.css";
import Header from "../../components/Header";

export const metadata = {
  title: "Snake on Mushrooms",
  description: "A trippy snake game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient-to-b from-purple-900 to-purple-600 min-h-screen">
        <Header />
        <main className="container mx-auto px-4 pt-24">{children}</main>
      </body>
    </html>
  );
}
