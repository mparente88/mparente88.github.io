import dynamic from "next/dynamic"

const Contact = dynamic(() => import("../components/Contact"))

export default function ContactPage() {
  return <Contact />
}
