import { configureStore } from "@reduxjs/toolkit";
import DealsSlice from "./DealsSlice";
import openDealSlice from "./openDealSlice";

const store = configureStore({
    reducer: {
        DealsArr: DealsSlice,
        createDealStatus: openDealSlice,
    }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch