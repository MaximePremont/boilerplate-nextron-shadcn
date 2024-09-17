import React from 'react'
import Image from 'next/image'

function IndexPage() {
  return (
    <main className="flex flex-col items-center gap-2 pt-10">
      <Image
        priority
        src="/images/logo.png"
        alt="logo"
        width={150}
        height={150}
      />
      <h1 className="text-lg font-semibold">
        Nextron ( Next.Js + Electron ) Boilerplate
      </h1>
      <p>With TypeScript, TailwindCSS and Shadcn/ui</p>
      <p>Crossbuild for Web or Desktop</p>
    </main>
  )
}

export default IndexPage
