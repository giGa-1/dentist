
import '../styles/normalize.css'
import '../styles/globals.css'
import '../styles/index.css';

import {wrapper} from './../redux/store'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


export default wrapper.withRedux(MyApp)