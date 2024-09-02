import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import TopNavBar from "./Components/top-nav-bar";
import Whiteboard from "./Components/whiteboard";
import { AppBar, Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
    <ClerkProvider>

        <body>
          <TopNavBar />
          <Container className="mt-14">{children}</Container>
          <Whiteboard />
        </body>
    </ClerkProvider>

      </html>
  );
}
