import connection from "../db.js";

const getAll= async()=> {
    let result = {
        succes: false,
        data: null
    }
 
    
    try {
        let res = await connection.promise().query(
            'SELECT * FROM results'
        )

        result.succes = true
        result.data = res[0]

        return result
    } catch (err) {
        result.succes = false
        result.data = err

        return result
    }
}

export default {
    getAll
}