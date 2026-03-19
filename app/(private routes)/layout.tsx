import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

interface PrivateProps {
  children: React.ReactNode;
}

export default function PrivateLayout({ children }: PrivateProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
