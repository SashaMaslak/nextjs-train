import { FC, PropsWithChildren } from "react"
import dynamic from "next/dynamic"
import Header from "./header/Header"
import { IMeta } from "../seo/meta.interface"
import Meta from "../seo/Meta"
// import { Titillium_Web } from "next/font/google"

const DynamicFooter = dynamic(() => import("./Footer"), { ssr: false })

// const titillium = Titillium_Web({
//   weight: ["300", "400", "600", "700"],
//   subsets: ["latin"],
//   variable: "--titillium",
// })

const Layout: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  children,
}) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      <main>{children}</main>
      <DynamicFooter />
    </Meta>
  )
}

export default Layout
