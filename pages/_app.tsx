import 'tailwindcss/tailwind.css'
import MdxProvider from '../components/MdxProvider'
import { CurrentSlideProvider } from '../lib/CurrentSlideContext'
import { AnimatePresence } from 'framer-motion'
import TransitionPage from '../layouts/TransitionPage'

function MyApp({ Component, pageProps }) {
  return (
    <MdxProvider>
      <CurrentSlideProvider>
        <AnimatePresence exitBeforeEnter>
          <TransitionPage>
            <Component {...pageProps} />
          </TransitionPage>
        </AnimatePresence>
      </CurrentSlideProvider>
    </MdxProvider>
  )
}

export default MyApp
