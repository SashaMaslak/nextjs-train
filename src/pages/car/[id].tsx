import { NextPage } from "next"
import { useRouter } from "next/router"

const CarPage: NextPage = () => {
  const { push, replace } = useRouter()
  console.log(`replace:`, replace)
  console.log(`push:`, push)

  return <div>Enter</div>
}

export default CarPage
