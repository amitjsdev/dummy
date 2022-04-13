// import logo from "./logo.svg";
// import "./App.css";
// import { Provider } from "react-redux";
// // import configureStore from "./redux/store/thunkStore";
// import store from "./redux/store/sagaStore";
// import Application from "./Application";
// import { BrowserRouter } from "react-router-dom";
// let { store } = configureStore();


import React, { useState } from "react";
import { Navigation, Footer, Header, WhatWeDo, Contact } from "./components";

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  return (
    <div className="App">
      <Navigation
        language={language}
        handleSetLanguage={language => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
      <Header language={language} />
      <div class="container">
        <div class="row">
          <div class="col-md-8 mb-5">
            <WhatWeDo language={language} />
          </div>
          <div class="col-md-4 mb-5">
            <Contact language={language} />
          </div>
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

{/* <Provider store={store}>
  <BrowserRouter>
    <Application />
  </BrowserRouter>
</Provider> */}



export default App;
