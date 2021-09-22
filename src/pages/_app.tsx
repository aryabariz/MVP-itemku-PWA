import type { AppProps } from 'next/app'

import '../../styles/base.css'
import ProductProvider from '../helpers/context'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  //   navigator.serviceWorker
  //     .register('/sw.js')
  //     .then((reg) => console.log('Service worker registered', reg))
  //     .catch((error) => {
  //       console.log(error)
  //       console.log('Service worker disabled')
  //     })
  // }
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  )
}

export default MyApp
