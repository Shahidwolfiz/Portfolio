'use client';
import './globals.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import { Pridi } from 'next/font/google';
import Head from 'next/head';

const pridi = Pridi({
  subsets: ['latin'], // Adjust the subsets according to your needs
  weight: ['400', '700', '600'], // Add the weights you need
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Wolfiz Portfolio</title>
        <meta name="description" content="Portfolio Projects" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={pridi.className}>
        <style jsx>{`
          .zindex {
            z-index: 9;
          }
        `}</style>
        <header className="fixed flex items-end justify-start h-24 zindex">
          <div className="font-bold fixed  flex items-center justify-center lg:w-[15%] w-[30%]">
            <Link href="/">
              <Image
                alt="logo"
                height={100}
                width={100}
                src="/svg/wolfizlogo.svg"
                priority
              />
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <SpeedInsights />
        <Analytics />

        <footer className="flex flex-wrap justify-center p-2 text-sm text-center text-white bg-black lg:h-16 lg:p-10 lg:justify-between lg:text-base">
          <span>© 2013 – 2024 All Rights Reserved by Wolfiz Solutions</span>
          <div className="flex items-center justify-center gap-3 pt-1 text-center lg:gap-10 lg:p-0">
            <span>Life at Wolfiz </span> <span> Privacy Policy </span>
            <span> Terms & Conditions</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
