import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/sidebar.css'

// impoprt dependecies  
import '../styles/css/dark.css'
import '../styles/css/light.css'
import '../styles/css/style.bundle.css'
import '../styles/css/dark.css'
import '../styles/css/dark.css'

// import { connect, Provider } from "react-redux"
// import { store } from '../store/app'
import { useRouter } from "next/router";
import { useEffect } from 'react'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window == 'undefined') return null

  }, []);

  return (
    <> 
      <NextNProgress color="#ef034f" />
      <Component {...pageProps} router={router} />
    </>

  )
}

export default MyApp
