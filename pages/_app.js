import { Provider } from "react-redux";
import Layout from "../components/Layout";
import AuthProvider from "../context/AuthProvider/AuthProvider";
import { store } from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
