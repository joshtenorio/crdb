import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events/demo/upcoming')({
  component: RouteComponent,
  ssr: true
})

function RouteComponent() {
  return <div>Hello "/events/demo/upcoming"!</div>
}
