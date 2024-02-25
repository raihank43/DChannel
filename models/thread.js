'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Thread.belongsTo(models.User)
      Thread.hasMany(models.Post)
    }
  }
  Thread.init({
    UserId: DataTypes.INTEGER,
    subject: DataTypes.STRING,
    desc: DataTypes.TEXT,
    threadImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Thread',
  });
  return Thread;
};