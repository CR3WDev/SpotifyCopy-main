const Playlist = require('../models/Playlist')

class PlaylistRepository{

    insert(obj){
        const _playlist = Playlist.create({...obj})
        return _playlist
    }
    
    async update(objeto){
        return Playlist.update({...objeto}, { where: { id: objeto.id } })
    }

    async delete(id){
        const jane = await Playlist.findByPk(id)
        jane.destroy();
    }

    findById(id){
        return Playlist.findByPk(id)
    }

    findAll(){
        return Playlist.findAll()
    }
}

module.exports = PlaylistRepository