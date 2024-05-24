import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "../components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { Toaster } from "react-hot-toast";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";

import axios from "axios";
import useGetGeneralData from "../hooks/useGetGeneralData";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const queryClient = new QueryClient()

  useGetGeneralData()



  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Component {...pageProps} />
          <Toaster position="top-right" />
          <SrollTop />
        </Provider>
      </QueryClientProvider>
    </main>
  );
}
