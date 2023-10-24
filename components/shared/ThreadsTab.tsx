
import { fetchUserPosts } from "@/lib/actions/user.actions"
import { redirect } from "next/navigation"
import Threadcard from "../cards/ThreadCard"
import { fetchCommunityPosts } from "@/lib/actions/community.actions"

interface Props {
    currentUserId: string
    accountId: string
    accountType: string
}

 async function ThreadsTab ({currentUserId, accountId, accountType}: Props ){
let result: any

if (accountType === "Community") {
    result= await fetchCommunityPosts(accountId)
} else {

result = await fetchUserPosts(accountId)
}

   if(!result) redirect('/')
    return (
    <section className="mt-9 flex flex-col gap-10">
        {result.threads.map((threads: any) => (
            <Threadcard  key={threads._id} 
            id= {threads.id}
            currentUserId= {currentUserId}
            parentId = {threads.parentId}
            content= {threads.text}
            author= {accountType === 'User' ? {name:result.name, image: result.image, id: result.id}:
            {name: threads.author.name, image: threads.author.image, id: threads.author.id}
        
        }
            community = {threads.community}
            createdAt = {threads.createdAt}
            comments= {threads.children}
            />
        ))}
    </section>
    )
    }
export default ThreadsTab