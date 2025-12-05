import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Recipe } from './Recipe.jsx'
const queryClient = new QueryClient()
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Recipe />
    </QueryClientProvider>
  )
}
