import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      TODOS Application Using Next JS
      <Link href="/todo">Todo</Link>
    </main>
  );
}
