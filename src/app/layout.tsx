import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './components/ClientLayout';

export const metadata: Metadata = {
  title: 'BOBULI SPACE',
  description: '个人艺术作品集',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
