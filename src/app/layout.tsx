import type { Metadata } from 'next';

import { inter } from '@/app/fonts';
import { Analytics } from '@vercel/analytics/react';

import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://nextblend.vercel.app'),
  title: {
    template: '%s | StackExplorer',
    default: 'StackExplorer',
  },
  description: 'Top Stacks for Building Projects and SaaS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="a07e2826-5910-4684-9e69-0ec4388a0509"
          async
        ></script>
      </head>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col bg-background">
          <main className="flex-1">{children}</main>
        </div>
        {/* <Toaster position="top-center" /> */}
        <Analytics />
      </body>
    </html>
  );
}
