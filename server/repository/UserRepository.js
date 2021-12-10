const User = require('../models/User')

class UserRepository{

    insert(obj){
        const user = User.create({...obj})
        return user
    }
    
    update(user){
        return User.update({...obj}, { where: { id: user.id } })
    }

    async delete(user){
        const jane = await User.findByPk(user.id)
        jane.destroy();
    }

    findById(id){
        return User.findByPk(id)
    }

    async findAll(){
        return await User.findAll()
    }
}

module.exports = UserRepository