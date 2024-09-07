import { Metadata } from 'next';

// Function to generate dynamic metadata based on the language
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isBengali = params.lang === 'bn';

  return {
    title: isBengali ? 'আমাদের সম্পর্কে - আমাদের সম্পর্কে আরও জানুন' : 'About Us - Learn More About Us',
    description: isBengali
      ? 'আমাদের কোম্পানি এবং পরিষেবা সম্পর্কে বিস্তারিত জানুন।'
      : 'Learn more about our company and services.',
  };
}

export default function AboutPage({ params }: { params: { lang: string } }) {
  const isBengali = params.lang === 'bn';

  return (
    <div>
      <h1>{isBengali ? 'আমাদের সম্পর্কে' : 'About Us'}</h1>
      <p>
        {isBengali
          ? 'আমরা আপনার প্রয়োজন মেটাতে উচ্চ মানের পণ্য এবং পরিষেবা প্রদান করি।'
          : 'We provide high-quality products and services to meet your needs.'}
      </p>
    </div>
  );
}
