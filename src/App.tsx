import { useState } from 'react'
import { Button } from '@/components/ui/button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold">Personal Webpage</h1>
      <p className="text-muted-foreground">
        Built with React + Vite + TypeScript + TailwindCSS + shadcn/ui
      </p>
      <div className="flex gap-4">
        <Button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </Button>
        <Button variant="outline">Secondary Button</Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Edit <code>src/App.tsx</code> to get started
      </p>
    </div>
  )
}

export default App
