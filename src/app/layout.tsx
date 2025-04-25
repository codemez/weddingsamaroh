import './globals.css';
import Header from '@/app/components/common/header/page';
import Footer from '@/app/components/common/footer/page';

export const metadata = {
  title: 'Vendor Marketplace',
  description: 'Connect with trusted vendors easily.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

