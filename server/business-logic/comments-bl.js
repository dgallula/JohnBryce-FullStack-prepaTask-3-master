import commentsDal from '../data-access-layer/comments-dal.js'

const getAll= async()=> {
    return await commentsDal.getAll()
}

export {
    getAll
}