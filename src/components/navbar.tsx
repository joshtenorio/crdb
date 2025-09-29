import { Link, useLocation, useMatchRoute, useRouter, useRouterState } from '@tanstack/react-router'
import { TopNavigationMenu, TopNavigationMenuItem, TopNavigationMenuList, TopNavigationMenuLink } from '@/components/ui/top-navigation-menu'
import { Separator } from '@/components/ui/separator'
import { LogIn } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar() {
    const { location } = useRouterState()
    const inEvents = location.pathname.startsWith("/events")
    const inRankings = location.pathname.startsWith("/rankings")

  return (
    <div>
      <TopNavigationMenu className='bg-navbar text-navbar-foreground max-w-full'>
        <TopNavigationMenuList className='px-4 space-x-2 h-12'>
          <Separator orientation='vertical' className='bg-neutral-800' />
          <TopNavigationMenuItem>
            <TopNavigationMenuLink className='font-semibold hover:border-transparent focus:bg-inherit focus:text-inherit' asChild>
              <Link to='/' >crdb.net</Link>
            </TopNavigationMenuLink>
          </TopNavigationMenuItem>
          <Separator orientation='vertical' className='bg-neutral-800' />
          <TopNavigationMenuItem>
            <TopNavigationMenuLink className='focus:bg-inherit focus:text-inherit' active={inEvents} asChild>
              <Link to='/events' className=''>Events</Link>
            </TopNavigationMenuLink>
          </TopNavigationMenuItem>
          <Separator orientation='vertical' className='bg-neutral-800' />
          <TopNavigationMenuItem>
            <TopNavigationMenuLink className='focus:bg-inherit focus:text-inherit' active={inRankings} asChild>
              <Link to='/rankings' className='font-display'>Rankings</Link>
            </TopNavigationMenuLink>
          </TopNavigationMenuItem>
          <Separator orientation='vertical' className='bg-neutral-800' />
        </TopNavigationMenuList>
      </TopNavigationMenu>
    </div>
  )
}