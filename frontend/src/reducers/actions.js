
export const getList = () => ({
    type: 'REQUEST_LIST'
})

export const updateItem = (item, id) => ({
    type: 'UPDATE_ITEM',
    payload: {item, id}
})

export const deleteItem = (id) => ({
    type: 'DELETE_ITEM',
    payload: id
})

export const createItem = (item) => ({
    type: 'CREATE_ITEM',
    payload: item
})