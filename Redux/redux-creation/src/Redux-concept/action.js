const actionCreator = (data)=>{
    return {
        type: 'ADD_ITEM',
        payload: data
    }
}

export default actionCreator;