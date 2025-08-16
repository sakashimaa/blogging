import { TrpcProvider } from './lib/trpc'
import { AllBlogsPage } from './pages/AllBlogsPage'

export const App = () => {
  return (
    <TrpcProvider>
      <AllBlogsPage />
    </TrpcProvider>
  )
}
