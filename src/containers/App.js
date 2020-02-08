import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Main from "../containers/Main/Main";
import Footer from "../components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import { persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from 'react-toastify';
import HttpsRedirect from 'react-https-redirect';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

class App extends Component {
  render() {
    return (
      <HttpsRedirect>
        <Provider store={store}>
          <Router>
            <PersistGate loading={null} persistor={persistor}>
              <ScrollToTop />
                <div className="App">
                  <Navbar />
                  <ToastContainer />
                  <Main />
                  <Footer />
                </div>
            </PersistGate>
          </Router>
        </Provider>
      </HttpsRedirect>
    );
  }
}

export default App;
