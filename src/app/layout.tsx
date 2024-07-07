import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/provider/provider";
import { Toaster } from "react-hot-toast";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trivio.",
  description: "Best quizzes app ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>
          {children}
          <Toaster
            toastOptions={{

              success: {
                iconTheme: {
                  primary: "#fff",
                  secondary: "#6b89c5"
                },
                style: {
                  background: '#6b89c5',
                  color: "#fff"
                },
              },

            }}
          />
        </Providers>
      </body>
    </html>
  );
}
