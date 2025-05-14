import Link from "next/link";
export default function Home() {
  return (
    <div>
      <p>Hello !</p>
      <Link href="/dashboard"> Dashboard</Link>
      <Link href="/about"> About</Link>
    </div>
  );
}
