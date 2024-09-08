import Hero from '../components/hero';
import About from '../components/about';
import Services from '../components/services';

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <div>
      <Hero lang={params.lang} />
      <About lang={params.lang} />
      <Services lang={params.lang} />
    </div>
  );
}
