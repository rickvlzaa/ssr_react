import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
function appReducer(state = {}, action) {
    return state;
}


export default combineReducers({
    app: appReducer,
    form: formReducer
});