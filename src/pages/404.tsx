import Layout from "@/components/layout/Layout"
import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

export const NotFound: NextPage = () => {
  return (
    <Layout title="Not found">
      <Head>
        <title>Not found</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <Image priority src="/404.png" alt="404" width={450} height={450} />
      </div>
    </Layout>
  )
}

export default NotFound
