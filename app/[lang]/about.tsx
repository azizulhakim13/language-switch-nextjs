import About from '../components/about';

export default function AboutPage({ params }: { params: { lang: string } }) {
  return (
    <div>
      <About lang={params.lang} />
    </div>
  );
}
