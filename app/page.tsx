import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';

export default function Home() {
  const lang = 'bn'; // This will always be Bengali since it's the default page

  return (
    <div>
      <Hero lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
    </div>
  );
}
