import Siderbar from '../components/Siderbar'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <main>
        <Siderbar />
        {/* Center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}
