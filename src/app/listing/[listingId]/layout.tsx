import type { ReactElement } from 'react';
import ListingHeader from './_components/listing-header';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Readonly<Props>): ReactElement {
  return (
    <>
      <ListingHeader />
      {children}
    </>
  );
}
