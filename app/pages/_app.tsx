import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer theme='dark' position="bottom-right"/>
    </>
  )
}

export default MyApp