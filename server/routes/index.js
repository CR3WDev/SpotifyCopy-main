const express = require('express')
const router = express.Router()
const playlist_routes = require('./playlist_routes')
const music_routes = require('./music_routes')
const user_routes = require('./user_routes')


const api = express.Router()
api.use('/playlist', playlist_routes)
api.use('/music', music_routes)
api.use('/user', user_routes)

router.use('/api', api)

module.exports = router