import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import contactReducer from "./slice/contactSlice";
import eventReducer from "./slice/eventSlice";
import teammemberReducer from "./slice/teamMemberSlice";
import settingsReducer from "./slice/settingSlice";
import taskReducer from "./slice/taskSlice";

const rootReducer = combineReducers({
  contact: contactReducer,
  events: eventReducer,
  teammember: teammemberReducer,
  settings: settingsReducer,
  tasks: taskReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  blacklist: [], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
