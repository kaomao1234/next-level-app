import { Drawer, Footer, Header } from "@/components";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Drawer>
      <div className="flex flex-col">
        <Header />
        <Component {...pageProps} />;
        <Footer />
      </div>
    </Drawer>
  );
}
