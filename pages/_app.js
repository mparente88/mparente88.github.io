import Head from "next/head"
import "../styles/global.css"
import Layout from "../components/Layout"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleStop = () => setIsLoading(false)

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleStop)
    router.events.on("routeChangeError", handleStop)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleStop)
      router.events.off("routeChangeError", handleStop)
    }
  }, [router])

  return (
    <>
      <Head>
        <title>Molly Parente - Software Engineer</title>
        <meta name="description" content="Portfolio of Molly Parente, showcasing skills, projects, and testimonials." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Molly Parente - Software Engineer" />
        <meta property="og:description" content="Portfolio of Molly Parente, highlighting projects and expertise." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://yourportfolio.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {isLoading && (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        )}
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
