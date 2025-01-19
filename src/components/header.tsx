import Link from 'next/link'
import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import GarageLogo from '@/components/icons/garage-logo'
import type { ReactElement } from 'react'

export default function Navbar(): ReactElement {
    return (
        <header className="w-full border-b bg-background">
            <div className="container flex h-16 items-center justify-between gap-4">
                <Link href="/" className="flex items-center gap-2">
                    <GarageLogo />
                </Link>

                <div className="relative hidden max-w-xl flex-1 md:block">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search" className="w-full pl-9" />
                </div>

                <nav className="flex items-center gap-4">
                    <Link
                        href="/browse"
                        className="hidden text-sm font-medium hover:text-primary md:block"
                    >
                        Browse listings
                    </Link>
                    <Link
                        href="/sell"
                        className="hidden text-sm font-medium hover:text-primary md:block"
                    >
                        Start selling
                    </Link>
                    <Button variant="outline" size="sm">
                        Log in
                    </Button>
                </nav>
            </div>
        </header>
    )
}
