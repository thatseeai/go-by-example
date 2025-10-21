import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Go 예제로 배우기',
  description: '실습 중심 Go 언어 학습 서비스',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
