import { getSession } from 'next-auth/react'
import Center from '../components/Center'
import Siderbar from '../components/Siderbar'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <main className="flex">
        <Siderbar />
        <Center />
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
