import dynamic from "next/dynamic"

const Endorsements = dynamic(() => import("../components/Endorsements"))

export default function EndorsementsPage() {
  return <Endorsements />
}
