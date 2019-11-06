import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import relayEnvironment from "./RelayEnvironment";

ReactDOM.render(
  <RelayEnvironmentProvider environment={relayEnvironment}>
    <Suspense fallback={"Taking some time..."}>
      <App />
    </Suspense>
  </RelayEnvironmentProvider>,
  document.getElementById("root")
);
