import type { Metadata } from 'next';
import { Noto_Sans_SC } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans_SC({
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: '你好！这里是 Alex3236',
  description: '这是我的个人主页！请多指教~',
  keywords: ['Alex3236', '个人主页', 'Alex32768', 'ely32768'],
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🥺</text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='zh-CN'>
      <body
        className={`${notoSans.className} antialiased select-none bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
