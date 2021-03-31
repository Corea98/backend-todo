const store = require('../../store/mysql')

const TABLA = 'task'

module.exports = function () {

    function list () {
        return store.list(TABLA)
    }

    function upsert (task) {
        return store.upsert(TABLA, task)
    }

    function deleteData (id) {
        return store.deleteData(TABLA, id)
    }

    return {
        list,
        upsert,
        deleteData
    }
}