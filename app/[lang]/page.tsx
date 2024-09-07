import { Metadata } from 'next';
import Hero from '../components/hero';
import About from '../components/about';
import Services from '../components/services';
import Testimonials from '../components/Testimonials';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isBengali = params.lang === 'bn';

  return {
    title: isBengali ? 'হোম - আমাদের ওয়েবসাইটে স্বাগতম' : 'Home - Welcome to Our Website',
    description: isBengali
      ? 'আমাদের ওয়েবসাইটের মাধ্যমে সেরা পরিষেবা এবং পণ্য সম্পর্কে জানুন।'
      : 'Discover the best services and products through our website.',
  };
}

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <div>
      <Hero lang={params.lang} />
      <About lang={params.lang} />
      <Services lang={params.lang} />
      <Testimonials lang={params.lang} />
    </div>
  );
}
