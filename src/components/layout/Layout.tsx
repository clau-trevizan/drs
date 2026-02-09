import Header from './Header';
import Footer from './Footer';
import { PageLoader } from '@/components/ui/PageLoader';

interface LayoutProps {
  children: React.ReactNode;
  mainClassName?: string;
}

export function Layout({ children, mainClassName = '' }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <PageLoader />
      <Header />
      <main className={`flex-1 ${mainClassName}`}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
