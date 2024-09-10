import React, { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'

function IndexPage() {
  return (
    <Fragment>
      <Head>
        <title>Nextron boilerplate</title>
        <link rel='icon' href='/images/logo.png' />
      </Head>
      <div className="flex flex-col items-center gap-2 pt-10">
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
      </div>
    </Fragment>
  )
}

export default IndexPage
