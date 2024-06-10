'use client';

import Link from 'next/link';
import { useAccount } from 'wagmi';
import Navbar from '../navbar/Navbar';
import { Button } from '../shadcn/button';
import MaxWidthWrapper from '../utils/MaxWidthWrapper';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
  return (
    <div className="border-b border-border shadow-md bg-background sticky top-0 inset-x-0 z-50">
      <MaxWidthWrapper className="w-full flex items-center px-3 py-6 justify-between ">
        <Link href="/">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl hover:text-primary transition">
            Jackpot
          </h1>
        </Link>
        <Navbar />

        <ConnectButton />
      </MaxWidthWrapper>
    </div>
  );
}
