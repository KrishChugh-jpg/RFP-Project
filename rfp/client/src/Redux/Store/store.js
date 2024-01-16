import {createStore} from 'redux';
import { rootReducer } from '../Reducer/reducer';

import {composeWithDevToolsDevelopmentOnly} from '@redux-devtools/extension';

export const store = createStore(
    rootReducer,
    composeWithDevToolsDevelopmentOnly(
        ));
export default store;