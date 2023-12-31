
import Threadcard from "@/components/cards/ThreadCard"
import { fetchThreads } from "@/lib/actions/thread.action"
import { currentUser } from "@clerk/nextjs"
 
export default async function Home() {
  const result = await fetchThreads(1, 30)
  const user = await currentUser()
  if (!user) return null;

  return (
    <>
    <h1 className="head-text text-left">Home</h1>

    <section className="mt-9 flex flex-col gap-10">
      {result.posts.length === 0 ? (
        <p className="no-result">No Threads found</p>
      ) : (
        <>
        {result.posts.map((post) => (
          <Threadcard  key={post._id} 
          id= {post.id}
          currentUserId= {user?.id}
          parentId = {post.parentId}
          content= {post.text}
          author= {post.author}
          community = {post.community}
          createdAt = {post.createdAt}
          comments= {post.children}
          />
        ))}
        </>
      )}

    </section>
    </>
  )
}