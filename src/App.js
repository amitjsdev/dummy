import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
// import configureStore from "./redux/store/thunkStore";
import store from "./redux/store/sagaStore";
import Application from "./Application";
import { BrowserRouter } from "react-router-dom";
// let { store } = configureStore();

function App() {
  return (
<Provider store={store}>
{/* <PersistGate loading={null} persistor={persistor}> */}
  <BrowserRouter>
    <Application />
  </BrowserRouter>
{/* </PersistGate> */}
</Provider>

  );
}

export default App;
