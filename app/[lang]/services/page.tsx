import { Metadata } from 'next';

// Function to generate dynamic metadata based on the language
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isBengali = params.lang === 'bn';

  return {
    title: isBengali ? 'সেবা - আমাদের পরিষেবা সম্পর্কে জানুন' : 'Services - Learn About Our Services',
    description: isBengali
      ? 'আমাদের পরিষেবা এবং পণ্য সম্পর্কে বিস্তারিত জানুন।'
      : 'Discover detailed information about our services and products.',
  };
}

export default function ServicesPage({ params }: { params: { lang: string } }) {
  const isBengali = params.lang === 'bn';

  return (
    <div>
      <h1>{isBengali ? 'আমাদের পরিষেবা' : 'Our Services'}</h1>
      <p>
        {isBengali
          ? 'আমরা আপনাকে উচ্চ মানের পরিষেবা প্রদান করি।'
          : 'We provide high-quality services to meet your needs.'}
      </p>
    </div>
  );
}
