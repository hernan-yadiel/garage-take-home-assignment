import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Separator from '@/components/separator';
import type { ReactElement } from 'react';

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): ReactElement => {
  const isExternal =
    href.startsWith('http') ||
    href.startsWith('mailto') ||
    href.startsWith('tel');

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group text-neutral-500 hover:text-black"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className="group text-neutral-500 hover:text-black">
      {children}
    </Link>
  );
};

const SocialIcon = ({
  href,
  ariaLabel,
  icon: Icon,
}: {
  href: string;
  ariaLabel: string;
  icon: React.ElementType;
}): ReactElement => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-neutral-500 hover:text-neutral-700"
    aria-label={ariaLabel}
  >
    <Icon className="h-6 w-6" />
  </a>
);

export function Footer() {
  return (
    <footer>
      <Separator />
      <div className="mx-auto max-w-screen-xl space-y-16 px-6 font-light text-neutral-900">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col space-y-4 py-8 md:py-16">
            <h2 className="font-medium">Marketplace</h2>
            <FooterLink href="/used-firefighting-equipment">
              Find equipment
            </FooterLink>
            <FooterLink href="/used-fire-trucks">Find apparatus</FooterLink>
            <FooterLink href="/buyers/buyer-protection">
              Buyer protection
            </FooterLink>
          </div>
          <div className="flex flex-col space-y-4 py-8 md:py-16">
            <h2 className="font-medium">Sellers</h2>
            <FooterLink href="/sell">Sell apparatus</FooterLink>
            <FooterLink href="/sell">Sell equipment</FooterLink>
            <FooterLink href="/sell/seller-protection">
              Seller protection
            </FooterLink>
          </div>
          <div className="flex flex-col space-y-4 py-8 md:py-16">
            <h2 className="font-medium">Support</h2>
            <FooterLink
              href="mailto:support@withgarage.com"
              aria-label="Email our support team"
            >
              Email us
            </FooterLink>
            <FooterLink
              href="tel:2012937164"
              aria-label="Call our support team"
            >
              (201) 293-7164
            </FooterLink>
          </div>
          <div className="flex flex-col space-y-4 py-8 md:py-16">
            <h2 className="font-medium">Company</h2>
            <FooterLink href="/our-story">About Garage</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/policies/privacy">Privacy policy</FooterLink>
            <FooterLink href="/policies/terms">Terms</FooterLink>
            <FooterLink href="/policies/auctions">Auctions</FooterLink>
          </div>
        </div>
      </div>
      <Separator />
      <div className="mx-auto max-w-screen-xl space-y-16 px-6 py-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <p className="text-sm font-light tracking-wide text-neutral-500">
            © 2024 Garage Technologies, Inc. <br />
            All rights reserved.
          </p>
          <div className="flex space-x-4">
            <SocialIcon
              href="https://www.facebook.com/profile.php?id=61553998774237"
              ariaLabel="Visit our Facebook page"
              icon={Facebook}
            />
            <SocialIcon
              href="https://www.instagram.com/withgarage/"
              ariaLabel="Visit our Instagram page"
              icon={Instagram}
            />
            <SocialIcon
              href="https://twitter.com/withgarage"
              ariaLabel="Visit our Twitter profile"
              icon={Twitter}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
