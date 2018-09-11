'use strict';
module.exports = (sequelize, DataTypes) => {
  const actor_drama = sequelize.define('actor_drama', {
    actorId: DataTypes.INTEGER,
    dramaId: DataTypes.INTEGER
  }, {});
  return actor_drama;
};