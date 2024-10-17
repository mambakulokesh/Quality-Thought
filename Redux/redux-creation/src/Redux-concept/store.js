import { legacy_createStore } from "redux";
import reducer from "./reducer";

var myStore = legacy_createStore(reducer);

export default myStore;
