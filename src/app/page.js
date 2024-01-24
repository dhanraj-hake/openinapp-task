import Image from "next/image";
import styles from "./page.module.css";

import 'bootstrap/dist/css/bootstrap.css';
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <Link href="/login">Login</Link>
      <br />
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
