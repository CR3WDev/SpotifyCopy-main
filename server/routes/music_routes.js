const express = require('express')
const router = express.Router()

const MusicRepository = require('../repository/MusicRepository')

const repository = new MusicRepository()


router.use(express.json())

router.get('/', async (_, res) => {
    const musics = await repository.findAll()
    resp = {
        status: 'OK',
        data: musics
    }
    res.status(200).json(resp)
})

router.get('/:id', async (req, res) => {
    let uid = req.params.id
    let chosenMusic = await repository.findById(uid)

    if(chosenMusic == undefined){
        resp = {
            status: 'ERROR',
            description: `Music with id ${uid} not was found`
        }
        res.status(404).json(resp)
        return;
    }

    resp = {
        status: 'OK',
        data: chosenMusic
    }

    res.status(200).json(resp)
})

router.post('/', async (req, res) => {
    let body = req.body

    if(body.title == undefined || body.audio == undefined){
        resp = {
            status: 'ERROR',
            description: 'Title and audio fields must be provided.'
        }
        res.status(404).json(resp)
        return;
    }

    const music = await repository.insert(body)

    resp = {
        status: 'OK',
        data: `Music with id ${music.id} was inserted with success.`
    }

    // res.status(200).send(JSON.stringify(resp))
    res.status(200).json(resp)
})

router.put('/:id', async (req, res) => {
    let uid = req.params.id
    let m = req.body

    if(m.title == undefined || m.audio == undefined){
        resp = {
            status: 'ERROR',
            description: 'Music JSON must be provided.'
        }
        res.status(400).json(resp)
        return;
    }

    let chosen_music = await repository.findById(uid)

    if(chosen_music == undefined){
        resp = {
            status: 'ERROR',
            description: `Music with id ${uid} not was found`
        }
        res.status(404).json(resp)
        return;
    }

    chosen_music.title = m.title
    chosen_music.audio = m.audio

    repository.update(chosen_music)

    resp = {
        status: 'OK',
        data: 'Music updated with success.'
    }

    res.status(200).json(resp)
})

router.delete('/:id', async (req, res) => {
    let uid = req.params.id
    let chosen_music = await repository.findById(uid)

    if(chosen_music == undefined){
        resp = {
            status: 'ERROR',
            description: `Music with id ${uid} not was found`
        }
        res.status(404).json(resp)
        return;
    }

    repository.delete(uid)

    resp = {
        status: 'OK',
        data: `Music with id ${uid} deleted with success.`
    }

    res.status(200).json(resp)
})

module.exports = router