import '../styles/globals.css'; // Import global CSS here
import RootLayout from '../components/RootLayout'; // Ensure this path is correct

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
