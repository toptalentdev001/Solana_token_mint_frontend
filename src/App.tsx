import "./App.css";
import WalletContextProvider from "./customHook/walletProvider";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <>
      <WalletContextProvider>
        <Dashboard />
      </WalletContextProvider>
    </>
  );
}

export default App;
