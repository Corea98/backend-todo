const express = require('express')

const response = require('../../network/response')
const Controller = require('./controller')()

const router = express.Router()

router.get('/', list)
router.post('/', upsert)
router.put('/', upsert)
router.delete('/', deleteData)

function list (req, res) {
    Controller.list()
        .then(data => response.success(req, res, data, 200))
        .catch(error => response.error(req, res, 'Ha ocurrido un error interno', 500))
}

function upsert (req, res) {
    Controller.upsert(req.body)
        .then(data => response.success(req, res, data, 200))
        .catch(error => {
            console.log(error)
            response.error(req, res, 'Ha ocurrido un error interno', 500)
        })
}

function deleteData (req, res) {
    Controller.deleteData(req.body.id)
        .then(data => response.success(req, res, data, 200))
        .catch(error => response.error(req, res, 'Ha ocurrido un error interno', 500))
}

module.exports = router