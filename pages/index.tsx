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
