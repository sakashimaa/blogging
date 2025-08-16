import { initTRPC } from '@trpc/server'

const blogs = [
  { id: 1, title: 'Blog 1', description: 'Blog 1 description' },
  { id: 2, title: 'Blog 2', description: 'Blog 2 description' },
  { id: 3, title: 'Blog 3', description: 'Blog 3 description' },
]

const trpc = initTRPC.create()

const trpcRouter = trpc.router({
  getBlogs: trpc.procedure.query(() => {
    return { blogs }
  }),
})

export type TrpcRouter = typeof trpcRouter
export default trpcRouter
