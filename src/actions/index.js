import fetch from 'isomorphic-fetch';
import { baseUrl } from '../config';

export const ACTION_TYPES = {
    REQUEST_TAPS: 'REQUEST_TAPS',
    FETCH_TAPS: 'FETCH_TAPS',
    RECIEVE_TAPS: 'RECIEVE_TAPS',
    RECIEVE_IMAGE: 'RECIEVE_IMAGE',
};

export function addTap(location) {
    return (dispatch, getState) => {
        return fetch(`${baseUrl}/taps.set`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image_id: getState().image.id,
                user_id: getState().userId,
                location,
            })
        }).then(response => response.json())
            .then(response => {
                    dispatch(fetchTaps());
                },
            );
    }
}

export function requestTaps() {
    return { type: ACTION_TYPES.REQUEST_TAPS }
}

export function recieveTaps(taps) {
    return { type: ACTION_TYPES.RECIEVE_TAPS, payload: taps }
}

export function fetchTaps() {
    return (dispatch, getState) => {
        dispatch(requestTaps());
        return fetch(`${baseUrl}/taps.get?image_id=${getState().image.id}&user_id=${getState().userId}`)
            .then(response => response.json())
            .then(response => {
                    dispatch(recieveTaps(response.data));
                },
            );
    }
}

export function fetchImage(imageId) {
    return dispatch => {
        return fetch(`${baseUrl}/images.get?image_id=${imageId}`)
            .then(response => response.json())
            .then(response => {
                    return dispatch(recieveImage({url: response.data, id: imageId}));
                },
            );
    }
}

export function recieveImage(image) {
    return { type: ACTION_TYPES.RECIEVE_IMAGE, payload: image }
}
