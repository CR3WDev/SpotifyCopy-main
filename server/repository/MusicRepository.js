const Music = require('../models/Music')

class MusicRepository{

    insert(obj){
        const _music = Music.create({...obj})
        return _music
    }
    
    async update(id){
        return Music.update({...obj}, { where: { id: id } })
    }

    async delete(id){
        const jane = await Music.findByPk(id)
        jane.destroy();
    }

    findById(id){
        return Music.findByPk(id)
    }

    findByPlaylistId(id){
        return Music.findAll( { where: { PlaylistId: id } } )
    }

    findAll(){
        return Music.findAll()
    }
}

module.exports = MusicRepository