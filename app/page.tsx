import { getServerSession } from "next-auth"
import { nextAuthOptions } from "./api/auth/[...nextauth]/route"

export default async function Home() {

  const session = await getServerSession(nextAuthOptions)

  return (
    <div className='h-[1000px] mt-20'>
      {session?.user.name}
    </div>
  )
}
