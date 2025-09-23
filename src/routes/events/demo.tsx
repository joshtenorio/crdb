import { Badge } from '@/components/ui/badge'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/events/demo')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <EventHeader/>
      <Outlet />
    </div>
  )
}

const navbarEntries = [
  {
    title: "Overview",
    href: "/events/demo"
  },
  {
    title: "Entry List",
    href: "/events/demo/entries"
  },
  {
    title: "Agenda",
    href: "/events/demo/entries"
  },
  {
    title: "Travel",
    href: "/events/demo/entries"
  },
  {
    title: "Brackets",
    href: "/events/demo/brackets"
  },
  {
    title: "Upcoming Fights",
    href: "/events/demo/upcoming"
  },
  {
    title: "Livestream",
    href: "/events/demo/entries"
  }
]

function EventHeader() {
  return (
    <div className='bg-card text-card-foreground pt-4 space-y-4'>
      <div className='flex flex-row space-x-4 px-4'> {/* header */}
        <Skeleton className='h-32 w-32' />
        <div className='flex flex-col w-full'>
          <div className='font-bold text-4xl'>EVAC - Monster Mash 2025</div>
          <div>EAST VALLEY ATTACK COMBAT ROBOTICS is happy to partner with Combat Ready Robotics to present Monster Mash 2025</div>
          <div className='grid grid-cols-3 pt-4'>
            <div className='flex flex-col'>
              <div className='text-xs'>DATE</div>
              <div className='text-sm'>October 11th, 2025</div>
            </div>
            <div className='flex flex-col'>
              <div className='text-xs'>LOCATION</div>
              <div className='text-sm'>Tempe, AZ</div>
            </div>
            <div className='flex flex-col'>
              <div className='text-xs'>WEIGHT CLASSES</div>
              <div className='text-sm space-x-1 space-y-1'>
                <Badge variant={'outline'}>Fairyweight</Badge>
                <Badge variant={'outline'}>Antweight</Badge>
                <Badge variant={'outline'}>Plastic Antweight</Badge>
                <Badge variant={'outline'}>Beetleweight</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div>
    <Separator />
    {/** 
      <NavigationMenu className=''>
        <NavigationMenuList className='flex flex-row w-full grow px-4 h-12'>
          <Separator orientation='vertical' />
          {
            navbarEntries.map((entry: any, idx, arr) => (
              <>
              <NavigationMenuItem className='px-4 hover:bg-gray-300 h-full justify-center flex flex-col' asChild>
              <Link to={entry.href} className='text-sm text-sky-600'>{entry.title}</Link>
              </NavigationMenuItem>
              <Separator orientation='vertical' /></>
              )
            )
          }
        </NavigationMenuList>
      </NavigationMenu>*/}
    </div>
    </div>
  )
}