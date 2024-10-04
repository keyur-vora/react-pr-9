const initialState = {
    users: JSON.parse(localStorage.getItem('users')) || []
};

const CrudReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            const addedUsers = [...state.users, action.payload];
            localStorage.setItem('users', JSON.stringify(addedUsers));
            return {
                ...state,
                users: addedUsers
            };

        case 'DELETE':
            const filteredUsers = state.users.filter((val) => val.id !== action.payload);
            localStorage.setItem('users', JSON.stringify(filteredUsers));
            alert("Deleted successfully...");
            return {
                ...state,
                users: filteredUsers
            };

        case 'EDIT':
           let editId=state.users.map((val)=>{
            if(val.id == action.payload.id){
                val.title=action.payload.title;
                val.note=action.payload.note;
            }
            return val;
           })
           localStorage.setItem('users',JSON.stringify(editId));

           return{
            ...state,
            users:editId
           }

        default:
            return state;
    }
};

export default CrudReducers;
