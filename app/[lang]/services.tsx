import Services from '../components/services';

export default function ServicesPage({ params }: { params: { lang: string } }) {
  return (
    <div>
      <Services lang={params.lang} />
    </div>
  );
}
