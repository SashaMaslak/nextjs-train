import Link from "next/link"
import { FC } from "react"
import styles from "./Header.module.css"

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>Home</Link>
      <Link href='/'>About page</Link>
    </header>
  )
}

export default Header
