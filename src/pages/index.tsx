import { UserButton } from "@clerk/nextjs";
import Head from "next/head";
// import Link from "next/link";
// import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Untitled Time Management App</title>
        <meta name="description" content="A Personal Time Management App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <UserButton />
      </header>
      <main>
        <p>Hello, you are signed in</p>
      </main>
      <footer>
        
      </footer>
    </>
  );
}
