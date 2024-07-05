import type { createReduxStore, rootReducer } from '../config/storeConfig';

export type IStoreSchema = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
