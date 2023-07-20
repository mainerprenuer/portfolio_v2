import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from "next/head";
import NavBar from '../components/NavBar';
import Footer from '@/components/Footer';
 

// If loading a variable font, you don't need to specify the font weight 
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

<script>
  // It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes
  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
</script>
<script src="../path/to/flowbite/dist/flowbite.bundle.js"></script>


    </Head>
    <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
      <NavBar />  
      <Component {...pageProps} />
      <Footer />
    </main>

    
    </>
  )
}
