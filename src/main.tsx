import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./application/App.tsx";
import "./application/styles/index.css";
import { GlobalStore } from "./infrastructure/store/global.store.ts";
import { Provider } from "mobx-react";
import { LocalStorageService } from "./infrastructure/services/storage";
import { ConfigService } from "./infrastructure/services/config";

const globalStore = new GlobalStore(new LocalStorageService(), new ConfigService());

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider globalStore={globalStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
