import { AppDrawer, Footer, Header } from "@/components";
import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <AppDrawer>
        <div className="flex flex-col">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </AppDrawer>
    </NextUIProvider>
  );
}
