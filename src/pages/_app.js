import '@/styles/globals.css'

import 'dm-standard/dist/styles/app.scss';
import 'video.js/dist/video-js.css';

export default function App({ Component, pageProps }) {
  return <div style = {{
    width: '100vw',
    height: '100vh'
  }}><Component {...pageProps} /></div>
}
