import 'tailwindcss/tailwind.css';
import '../public/styles.css';
import '@fontsource/poppins';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow bg-white">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
