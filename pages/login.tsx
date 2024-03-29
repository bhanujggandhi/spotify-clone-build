import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

const login = ({ providers }) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      <img src="https://links.papareact.com/9xl" className="mb-5 w-52" alt="" />

      {Object.values(providers).map((provider, i) => (
        <div key={i}>
          <button
            className="rounded-lg bg-[#18D860] p-5 text-white"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
