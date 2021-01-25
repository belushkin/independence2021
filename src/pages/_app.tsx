import { Provider } from 'react-redux'
import { useStore } from '@reducers/store'

import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
