import React from "react";
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import todoStore, { todoReducer } from "./compornents/Store";

//Redux Persistの設定
const persistConfig = {
    key: "todo",
    storage,
    blacklist:["message","mode","ftodo"],
    whitelist:["todo"]
};

//パーシストレデューサーの作成
const persistedReducer = persistReducer(persistConfig, todoReducer);

//ストア、パーシスターの作成
let store = createStore(persistedReducer);
let pstore = persistStore(store);

//表示をレンダリング
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<p>loading...</p>}
            persistor={pstore}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);

export default pstore;
