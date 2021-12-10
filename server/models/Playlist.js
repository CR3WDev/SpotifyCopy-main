const sequelize = require('../database')
const { DataTypes, Model } = require('sequelize')
const Music = require('./Music')
class Playlist extends Model {}
Playlist.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cover: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Playlist',
    tableName: 'playlists'
})

Playlist.hasMany(Music)
Music.belongsTo(Playlist)

module.exports = Playlist