import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events/demo')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <EventHeader/>
      <div>
        Hello "/events/demo"! this div should be replaced with outlet
      </div>
    </div>
  )
}

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
      <div className='flex flex-row w-full grow px-4 h-12'> {/* event navigation */}
        <div className='border-l p-4 flex flex-row hover:bg-gray-300'> {/* event navigation item */}
          <div className='text-sm self-center text-sky-600'>Overview</div>
        </div>
        <div className='border-l p-4 flex flex-row hover:bg-gray-300'> {/* event navigation item */}
          <div className='text-sm self-center text-sky-600'>Agenda</div>
        </div>
        <div className='border-l p-4 flex flex-row hover:bg-gray-300'> {/* event navigation item */}
          <div className='text-sm self-center text-sky-600'>Brackets</div>
        </div>
        <div className='border-l p-4 flex flex-row hover:bg-gray-300'> {/* event navigation item */}
          <div className='text-sm self-center text-sky-600'>Upcoming Fights</div>
        </div>
        <div className='border-x p-4 flex flex-row hover:bg-gray-300'> {/* event navigation item */}
          <div className='text-sm self-center text-sky-600'>Livestream</div>
        </div>
      </div>
    </div>
    </div>
  )
}