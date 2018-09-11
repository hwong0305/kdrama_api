'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('dramas', [{
            name: 'Goblin',
            episodes: 16,
            country: 'South Korea',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            name: 'Dream High',
            episodes: 20,
            country: 'South Korea',
            createdAt: new Date(),
            updatedAt: new Date()
        }])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('dramas', null, {});
    }
};
