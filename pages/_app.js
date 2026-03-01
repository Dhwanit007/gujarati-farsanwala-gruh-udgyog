import '../styles/globals.css'
import { PopupProvider } from '../context/PopupContext'

export default function App({ Component, pageProps }) {
  return (
    <PopupProvider>
      <Component {...pageProps} />
    </PopupProvider>
  )
}
