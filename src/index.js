import React from "react";
import ReactDOM from "react-dom";
import Store from "./store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App store={Store} />, rootElement);
