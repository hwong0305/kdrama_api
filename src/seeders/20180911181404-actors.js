'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('actors', [{
            name: 'Park Min Young',
            age: 32,
            country: 'South Korea',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            name: 'Yoo In Na',
            age: 36,
            country: 'South Korea',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'Kim Go Eun',
            age: 27,
            country: 'South Korea',
            createdAt: new Date(),
            updatedAt: new Date()
        }])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('actors', null, {});
    }
};
