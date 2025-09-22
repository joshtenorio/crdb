import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='p-2'>
      Show events here!
      <EventCard />
     </div>
    )
}

function EventCard() {
    return (
      <Card className='p-2'>
        <CardHeader>
          <CardTitle>EVAC - Monster Mash 2025</CardTitle>
        </CardHeader>
        <CardContent>
          
        </CardContent>
      </Card>
    )
}
