
import { legacy_createStore } from "redux"
import { commonReducer } from "./common/commonReducer";
import { rootReducers } from "./rootReducers"
export const store = legacy_createStore(commonReducer);