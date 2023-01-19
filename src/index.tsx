import ReactDOM from "react-dom/client";

import App from "./App";

import { store } from "./redux/store";

import { Provider } from "react-redux";

import { HashRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );
}
