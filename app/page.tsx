import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the English Homepage</h1>
      <Link href="/about">About Us</Link>
    </div>
  );
}
