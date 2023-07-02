import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "./counter"

export default configureStore({
    reducer: {
        money: moneyReducer
    }
});
