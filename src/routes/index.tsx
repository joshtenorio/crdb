import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'


export const Route = createFileRoute('/')({
  component: Home
})

function Home() {
  return (
    <Button
      type="button"
    >
      a
    </Button>
  )
}