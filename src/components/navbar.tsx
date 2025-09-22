import { Link, useLocation, useMatchRoute, useRouter, useRouterState } from '@tanstack/react-router'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { LogIn } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar() {
    const { location } = useRouterState()
    const inEvents = location.pathname.startsWith("/events")
    const inRankings = location.pathname.startsWith("/rankings")

  return (
    <div>
      <NavigationMenu className='bg-navbar text-navbar-foreground'>
        <NavigationMenuList className='px-4 space-x-2 w-screen h-12'>
          <Separator orientation='vertical' className='bg-neutral-800' />
          <NavigationMenuItem>
            <NavigationMenuLink className='font-semibold hover:border-transparent'>
              <Link to='/' >crdb.net</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator orientation='vertical' className='bg-neutral-800' />
          <NavigationMenuItem>
            <NavigationMenuLink className='' active={inEvents}>
              <Link to='/events' className=''>Events</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator orientation='vertical' className='bg-neutral-800' />
          <NavigationMenuItem>
            <NavigationMenuLink className='' active={inRankings}>
              <Link to='/rankings' className='font-display'>Rankings</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <Separator orientation='vertical' className='bg-neutral-800' />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}