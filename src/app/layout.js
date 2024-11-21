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
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </head>
      <body>
        <Header />
        <main className="pt-[140px]">{children}</main>
      </body>
    </html>
  );
}
