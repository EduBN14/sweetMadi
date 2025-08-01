import MainLayout from '../templates/MainLayout';
import Header from '../organismos/Header';
import SectionCards from '../organismos/section_cards';
import { PicturesSection } from '../organismos/section_picture';
import Footer from '../organismos/Footer';

export default function HomePage() {
  return (
    <MainLayout>
      <Header />
      
      <main className="space-y-8">
        <SectionCards />
        <PicturesSection />
      </main>
      
      <Footer />
    </MainLayout>
  );
}
