import { createStore } from "redux";
import rootReducer from "./reducers";

export const loadState = (key) => {
    try {
        const serializedData = localStorage.getItem(key);
        if (serializedData === null){
            return undefined ;
        }
        return JSON.parse(serializedData)
    } catch (error) {
        console.log("Load Error",error)
        return undefined;
    }
}

export const saveState = (key,state) => {
    try {
        let serializedData = JSON.stringify(state)
        localStorage.setItem(key, serializedData)
    } catch (error) {
        console.log("Save Error",error)
    }
}

const initialData = loadState('landingState');

export default createStore(rootReducer, initialData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
