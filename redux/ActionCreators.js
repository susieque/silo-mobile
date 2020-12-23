import * as ActionTypes from './ActionTypes';
//import baseUrl if using JSON server as mock source.
import { baseUrl } from '../shared/baseUrl';

//PACKAGES
export const fetchPackages = () => dispatch => {
    return fetch(baseUrl + 'packages')
        .then(response => {
                if (response.ok) {
                    console.log('response is okay');
                    return response;
                } else {
                    console.log('response is not okay.  Using URL: ' + baseUrl);
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                console.log('something went wrong in the ActionCreator');
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(packages => dispatch(addPackages(packages)))
        .catch(error => dispatch(packagesFailed(error.message)));
};

export const addPackages = packages => ({
    type:ActionTypes.ADD_PACKAGES,
    payload: packages
});

export const packagesFailed = errMess => ({
    type: ActionTypes.PACKAGES_FAILED,
    payload: errMess
});


export const receivePackage = (item) => ({
    type: ActionTypes.RECEIVE_PACKAGE,
    payload: item
});

export const addComment = (item) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: item
});

export const requestDispatch = (item) => ({
    type: ActionTypes.REQUEST_DISPATCH,
    payload: item
});

