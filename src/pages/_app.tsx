import '../styles/globals.css';
import Loader from "../components/ui/Loader";
import { AppProps } from 'next/app';
// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   subsets: ['latin'], // Specify the subsets
//   weights: ['400', '700'], // Specify the weights you need
// });

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    // <main className={roboto.className}>
      <>
        <Component {...pageProps} />;
        {/* <Loader /> */}
      </>
    // </main>
  )
}
