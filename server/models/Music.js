const sequelize = require('../database')
const { DataTypes, Model } = require('sequelize')

class Music extends Model {}
Music.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    audio: {
        type: DataTypes.BLOB,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Music',
    tableName: 'musics'
})

module.exports = Music