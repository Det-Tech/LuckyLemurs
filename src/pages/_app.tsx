import "styles/globals.css";
import React, { useMemo } from "react";
import { AppContext, AppProps } from "next/app";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletBalanceProvider } from "hooks/use-wallet-balance";
import Head from "next/head";
import theme from "styles/theme";
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

let WALLETS: any = {
  getLedgerWallet: () => ({ name: "Ledger" }),
  getPhantomWallet: () => ({ name: "Phantom" }),
  getSlopeWallet: () => ({ name: "Slope" }),
  getSolflareWallet: () => ({ name: "Solflare" }),
  getSolletWallet: () => ({ name: "Sollet" }),
  getSolletExtensionWallet: () => ({ name: "Sollet Extension" }),
};
if (typeof window !== "undefined") {
  WALLETS = require("@solana/wallet-adapter-wallets");
}

const network = process.env.NEXT_PUBLIC_SOLANA_NETWORK as WalletAdapterNetwork;

const App = ({ Component, pageProps }: AppProps) => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      WALLETS.getLedgerWallet(),
      WALLETS.getPhantomWallet(),
      WALLETS.getSlopeWallet(),
      WALLETS.getSolflareWallet(),
      WALLETS.getSolletWallet(),
      WALLETS.getSolletExtensionWallet(),
    ],
    []
  );

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <React.Fragment>
      <Head>
        <title>Lucky Lemurs</title>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect={false}>
            <WalletDialogProvider>
              <WalletBalanceProvider>
                <Component {...pageProps} />
              </WalletBalanceProvider>
            </WalletDialogProvider>
          </WalletProvider>
        </ConnectionProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};

export default App;
