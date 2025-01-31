import "@/app/globals.css";
import Header from "../../components/Header";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Snake on Mushrooms",
  description: "A trippy snake game",
  icons: {
    icon: "/mushroom.png",
    shortcut: "/mushroom.png",
    apple: "/mushroom.png",
  },
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
        <Analytics />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
