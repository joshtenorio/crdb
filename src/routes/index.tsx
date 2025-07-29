import { createFileRoute } from '@tanstack/react-router'
import { Button } from 'src/components/ui/button'


export const Route = createFileRoute('/')({
  component: Home
})

function Home() {
  return (
    <Button
      type="button"
    >
      hehez
    </Button>
  )
}