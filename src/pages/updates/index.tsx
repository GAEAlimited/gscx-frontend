import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

function Updates() {
  return (
    <>
      <Head>
        <title>Updates | GSCxBT.com</title>
        <meta property="og:title" content="Updates | GSCxBT.com" />
      </Head>
      <div className="py-12">
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-lg max-w-3xl mx-auto text-lg">
          <Image 
            src="/images/zilstream-banner.png"
            alt="GSCxBT.com"
            width={800}
            height={385}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-2xl mb-1">Introducing Network Membership</h1>
          <p>Introducing GSCxBT.com SuperChain GSC20 Membership, GAEAos Gateway Portal and XBTA.</p>
          <Link href="/updates/announcing-premium-membership">
            <a className="block mt-1 font-normal underline">Read more</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Updates
