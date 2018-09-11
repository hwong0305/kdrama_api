'use strict';
module.exports = (sequelize, DataTypes) => {
  const drama = sequelize.define('drama', {
    name: DataTypes.STRING,
    episodes: DataTypes.INTEGER,
    country: DataTypes.STRING
  }, {});
  drama.associate = function(models) {
    // associations can be defined here
    drama.belongsToMany(models.actors, {through: models.actor_drama})
  };
  return drama;
};