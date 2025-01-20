import Link from 'next/link'
import { Search } from 'lucide-react'
import type { ReactElement } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import GarageLogo from '@/components/icons/garage-logo'
import Separator from '@/components/separator'

export default function Header(): ReactElement {
    return (
        <header className="w-full bg-background">
            <div className="mx-auto flex max-w-screen-xl items-center justify-between space-x-6 px-6">
                <Link href="/" className="shrink-0">
                    <GarageLogo className="w-[72px] md:w-20" />
                </Link>
                <div className="relative w-full flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search" className="w-full pl-9" />
                </div>
                <nav className="flex items-center gap-4">
                    <Link
                        href="/browse"
                        className="py-6 text-sm font-semibold text-black hover:text-primary"
                    >
                        Browse listings
                    </Link>
                    <Link
                        href="/sell"
                        className="py-6 text-sm font-semibold text-black hover:text-primary"
                    >
                        Start selling
                    </Link>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="px-0 py-6 text-sm font-semibold text-black hover:text-primary"
                    >
                        Log in
                    </Button>
                </nav>
            </div>
            <Separator />
        </header>
    )
}
