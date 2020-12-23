import * as ActionTypes from './ActionTypes';

export const packages = (state = { 
                                isLoading: true,
                                errMess: null,
                                packages: []}, action) => {

    console.log("Reducer Action Type: " + action.type);
    switch(action.type){
        case ActionTypes.ADD_PACKAGES:
            return {...state, isLoading: false, errMess: null, packages: action.payload};
        
        case ActionTypes.PACKAGES_LOADING:
            return {...state, isLoading: true, errMess: null, packages: []};
        
        case ActionTypes.PACKAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload };
        
        case ActionTypes.RECEIVE_PACKAGE:
            console.log('You made it to the receive package reducer');
            return state;
            
        case ActionTypes.REQUEST_DISPATCH:
            console.log('You made it to the request dispatch reducer');
            return state;
            
        case ActionTypes.ADD_COMMENT:
            console.log('You made it to the add comment reducer');
            return state;
        
        default: 
            return state;
    }

};