import App from 'next/app'
import withDarkMode, { MODE } from 'next-dark-mode'

import '../styles/global.css'

// https://github.com/xeoneux/next-dark-mode/blob/master/example/src/pages/index.tsx
export default withDarkMode(App, { defaultMode: MODE.AUTO })