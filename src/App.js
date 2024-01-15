import "./App.css";
import { Provider } from "react-redux";
import store from "./store/Store";
import MainLayout from "views/layouts/MainLayout";

function App() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

export default App;
