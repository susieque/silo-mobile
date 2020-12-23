import * as ActionTypes from './ActionTypes';

export const packages = (state = { 
                                isLoading: true,
                                errMess: null,
                                packages: []}, action) => {

    console.log("Reducers Action Types: " + action.type);
    switch(action.type){
        case ActionTypes.ADD_PACKAGES:
            console.log('reducer called.')
            return {...state, isLoading: false, errMess: null, packages: action.payload};
        
        case ActionTypes.PACKAGES_LOADING:
            return {...state, isLoading: true, errMess: null, packages: []};
        
        case ActionTypes.PACKAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload };
        
        case ActionTypes.RECEIVE_PACKAGE:
            return state;
        
        case ActionTypes.REQUEST_DISPATCH:
            return state;
        
        case ActionTypes.ADD_COMMENT:
            return state;
        
        default: 
            return state;
    }

};