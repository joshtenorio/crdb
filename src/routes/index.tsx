import { createFileRoute, Link } from '@tanstack/react-router'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { LogIn } from 'lucide-react'
import { cn } from '@/lib/utils'


export const Route = createFileRoute('/')({
  component: Home
})

function Home() {
  return (
    <div>
      <div className='flex flex-col'>
      </div>
    </div>
  )
}

