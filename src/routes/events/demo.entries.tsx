import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events/demo/entries')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/events/demo/entries"!</div>
}
