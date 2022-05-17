import { signIn, signOut, useSession } from 'next-auth/client';
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./style.module.scss";

export function SigninButtons() {

  const  [session] = useSession();
  return session ? (
    <button className={styles.button} onClick={() => signOut()}>
      <FaGithub color="#04d361" />
      {session.user.name}
     <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button className={styles.button} onClick={() => signIn('github')}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
