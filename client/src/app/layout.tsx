require('../common/configs/dayjs.config.ts');
import Header from '@/common/components/header/Header';
import PageWrapper from '@/common/components/utils/PageWrapper';
import AppProvider from '@/common/providers/AppProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../common/css/app.css';
import '@rainbow-me/rainbowkit/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lottery',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProvider>
          <PageWrapper>
            <Header />
            {children}
          </PageWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
