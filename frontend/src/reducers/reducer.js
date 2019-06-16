


const reducer = (state, action) => {
    switch(action.type){

        case 'GET_LIST':
            return({
                ...state,
                list: action.payload
            })
        
        default:
            return state;

    }
};

export default reducer;