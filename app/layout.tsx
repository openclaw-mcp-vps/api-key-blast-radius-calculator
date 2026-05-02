import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Key Blast Radius Calculator",
  description: "Calculate the financial damage if your API keys are compromised. Analyze AWS, GCP, and Azure key permissions instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1c1b4d99-f5c2-49df-bc07-8a136a7325aa"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
