'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('actor_dramas', [{
            actorId: 1,
            dramaId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('actor_dramas', null, {});
    }
};
