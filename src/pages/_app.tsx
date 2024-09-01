// (custom App component for global styles or context)

// import Page from "."

// const App = () => {
//     return (
//         <>
//             <Page />
//         </>
//     )
// }

import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
