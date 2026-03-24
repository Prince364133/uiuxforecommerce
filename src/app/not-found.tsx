import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '5rem', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>The premium agri-tech resource you're looking for was moved or doesn't exist.</p>
      <Link href="/" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Return Home</Link>
    </div>
  );
}
