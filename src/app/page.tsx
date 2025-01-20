import Link from 'next/link';

export default function Home() {
  const exampleRoutes = [
    {
      id: 'ea02efd3-3a76-4953-96de-b0c1987bcf3f',
      comment: '(Price bigger than 10k)',
    },
    {
      id: '46d81bf0-1a5c-45bd-b4d3-d0f09679c140',
      comment: '(Price less than 10k)',
    },
  ];

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <h2 className="text-lg font-medium">Example Routes</h2>
        <ul className="list-inside list-disc">
          {exampleRoutes.map(({ id, comment }, index) => (
            <li key={id}>
              <Link
                href={`/listing/${id}`}
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Example # {index + 1} {comment}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
