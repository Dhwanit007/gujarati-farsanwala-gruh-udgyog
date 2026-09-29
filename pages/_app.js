import '../styles/globals.css'
import { PopupProvider } from '../context/PopupContext'
import { ThemeProvider } from '../context/ThemeContext'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <PopupProvider>
        <Component {...pageProps} />
      </PopupProvider>
    </ThemeProvider>
  )
}
