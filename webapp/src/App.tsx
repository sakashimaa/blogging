import { TrpcProvider } from './lib/trpc'
import { AllBlogsPage } from './pages/AllBlogsPage'

export function App() {
  return (
    <TrpcProvider>
      <AllBlogsPage />
    </TrpcProvider>
  )
}
