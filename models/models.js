const sequelize = require('../database')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    login : {type: DataTypes.STRING, allowNull: false },
    password: {type: DataTypes.STRING, allowNull: false },
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Theme = sequelize.define('theme',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false },
    discription: {type: DataTypes.STRING, allowNull: false}
})

const Test = sequelize.define('test',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false },
    discription: {type: DataTypes.STRING, allowNull: false},
})

const Rating = sequelize.define('rating',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false, }
})

const TestRating = sequelize.define('test_rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasMany(Theme)
Theme.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Theme.hasMany(Test)
Test.belongsTo(Theme)

Test.belongsToMany(Rating, {through: TestRating})
Rating.belongsToMany(Test, {through: TestRating})

module.exports = {
    User, 
    Test, 
    Theme, 
    Rating, 
    TestRating
}
