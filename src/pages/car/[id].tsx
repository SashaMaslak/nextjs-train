import { NextPage } from "next"
import { useRouter } from "next/router"

const CarPage: NextPage = () => {
  const { push, replace } = useRouter()
  console.log(`replace:`, replace)
  console.log(`push:`, push)

  return <div>111</div>
}

export default CarPage
