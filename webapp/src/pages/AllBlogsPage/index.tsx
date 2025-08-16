import { trpc } from '../../lib/trpc'

export function AllBlogsPage() {
  const { data, error, isLoading, isFetching, isError } = trpc.getBlogs.useQuery()

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return (
      <span>
        Error:
        {error.message}
      </span>
    )
  }

  return (
    <div>
      <h1>Blogging</h1>
      {data
        && data.blogs.map(blog => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
          </div>
        ))}
    </div>
  )
}
