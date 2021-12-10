const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'spotify',
    'CR3W',
    '564738',
    {dialect: 'mysql'}
)

module.exports = sequelize