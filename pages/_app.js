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
    <Layout>
      {isLoading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
      <Component {...pageProps} />
    </Layout>
  )
}
