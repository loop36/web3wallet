import "./App.css";

import Converter from "./Components/Pages/Converter/Converter";
import { Web3ReactProvider } from '@web3-react/core'

import { Web3Provider } from '@ethersproject/providers'
import Layout from "./Components/UI/Layout";
import Modal from "./Components/UI/Modal";

export const getLibrary = (provider) => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 1000
  return library
}
function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <Layout>
      <Converter />
     
    </Layout>
    </Web3ReactProvider>
  );
}

export default App;
