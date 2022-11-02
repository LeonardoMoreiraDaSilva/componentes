import '../styles/globals.css'
import {PageContainner} from '../components/pageContainner'



function MyApp({ Component, pageProps }) {
  return (
      <PageContainner>
        <Component {...pageProps} />
      </PageContainner>
  )
}

export default MyApp
