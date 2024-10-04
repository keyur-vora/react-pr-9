export const ADD_USER = (data) => {
    return {
        type: 'ADD',
        payload: data
    };
};

export const DELETE_USER = (id) => {
    return {
        type: 'DELETE',
        payload: id
    };
};

export const EDIT_USER = (data) => {
    return {
        type: 'EDIT',
        payload: data
    };
};
