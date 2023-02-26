import Head from 'next/head'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import useSWR from 'swr'

const inter = Inter({subsets: ['latin']})

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {

  const {data, error, isLoading} = useSWR('https://coding-challenge-be.vercel.app/api/index', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={styles.main}>
        <div>
          <h2>Eth price {data.data.price}</h2>
        </div>
      </main>
    </>
  )
}
