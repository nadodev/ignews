import Image from 'next/image'
import Logo from "../../../public/images/logo.svg"
import { SigninButtons } from '../SigninButtons'
import styles from "./style.module.scss"

export function Header(){
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image src={Logo} alt="Logo da aplicação" />
        <nav>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">Posts</a>
        </nav>
        <SigninButtons />
      </div>
    </header>
  )
}