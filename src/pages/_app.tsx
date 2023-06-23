// import { type AppType } from "next/app";
// import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import type { AppProps } from "next/app";

const isPublicPage = null;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <SignedIn>
          <Component {...pageProps} />
        </SignedIn>
      )}
    </ClerkProvider>
  );
}

export default MyApp;
