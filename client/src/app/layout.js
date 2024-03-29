/** @format */

import "./globals.css";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/redux/store";
import ProtectedPage from "@/routes/protected-routes";
import AuthProvider from "@/routes/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticketed | Ticketing Application",
  description: "An easy access to book your favorite events",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <head></head>
        <body className={inter.className}>
          <AuthProvider>
            <ProtectedPage>{children}</ProtectedPage>
          </AuthProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
