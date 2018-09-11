'use strict';
module.exports = (sequelize, DataTypes) => {
  const actors = sequelize.define('actors', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    country: DataTypes.STRING
  }, {});
  actors.associate = function(models) {
    // associations can be defined here
    actors.belongsToMany(models.drama, {through: models.actor_drama});
  };
  return actors;
};