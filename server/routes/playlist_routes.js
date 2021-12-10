const express = require('express')
const router = express.Router()

const PlaylistRepository = require('../repository/PlaylistRepository')
const MusicRepository = require('../repository/MusicRepository')

const repository = new PlaylistRepository()
const repositoryM = new MusicRepository()

router.use(express.json())

router.get('/', async (_, res) => {
    const playlists = await repository.findAll()
    resp = {
        status: 'OK',
        data: playlists
    }
    res.status(200).json(resp)
})

router.get('/:id', async (req, res) => {
    let uid = req.params.id
    let chosenPlaylist = await repository.findById(uid)

    if(chosenPlaylist == undefined){
        resp = {
            status: 'ERROR',
            description: `Playlist with id ${uid} not was found`
        }
        res.status(404).json(resp)
        return;
    }

    resp = {
        status: 'OK',
        data: chosenPlaylist
    }

    res.status(200).json(resp)
})

router.get('/:id/musics', async(req, res) => {
    const musics = await repositoryM.findByPlaylistId(req.params.id)

    resp = {
        status: 'OK',
        data: musics
    }
    res.status(200).json(resp)

})

router.post('/', async (req, res) => {
    let body = req.body

    if(body.title == undefined || body.cover == undefined){
        resp = {
            status: 'ERROR',
            description: 'Title and cover fields must be provided.'
        }
        res.status(404).json(resp)
        return;
    }

    const playlist = await repository.insert(body)

    resp = {
        status: 'OK',
        data: `Playlist with id ${playlist.id} was inserted with success.`
    }

    // res.status(200).send(JSON.stringify(resp))
    res.status(200).json(resp)
})

router.put('/:id', async (req, res) => {
    let uid = req.params.id
    let p = req.body

    if(p.title == undefined || p.cover == undefined){
        resp = {
            status: 'ERROR',
            description: 'Playlist JSON must be provided.'
        }
        res.status(400).json(resp)
        return;
    }

    let chosen_playlist = await repository.findById(uid)

    if(chosen_playlist == undefined){
        resp = {
            status: 'ERROR',
            description: `Playlist with id ${uid} not was found`
        }
        res.status(404).json(resp)
        return;
    }

    chosen_playlist.title = p.title
    chosen_playlist.cover = p.cover
    console.log(chosen_playlist.cover)

    repository.update(chosen_playlist)

    resp = {
        status: 'OK',
        data: 'Playlist updated with success.'
    }

    res.status(200).json(resp)
})

router.delete('/:id', async (req, res) => {
    let uid = req.params.id
    let chosen_playlist = await repository.findById(uid)

    if(chosen_playlist == undefined){
        resp = {
            status: 'ERROR',
            description: `Playlist with id ${uid} not was found`
        }
        res.status(404).json(resp)
        return;
    }

    repository.delete(uid)

    resp = {
        status: 'OK',
        data: `Playlist with id ${uid} deleted with success.`
    }

    res.status(200).json(resp)
})

module.exports = router