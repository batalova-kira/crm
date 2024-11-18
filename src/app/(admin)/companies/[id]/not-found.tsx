import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <p>Could not found company</p>
      <Link href={'/companies'} className="text-blue-500">
        Back to companies
      </Link>
    </div>
  );
}
