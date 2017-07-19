//Random useful links people have slacked out in the past

module.exports = function(sequelize, DataTypes) {

    var Link = sequelize.define("Link", {

        link: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'createdAt',
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updatedAt',
            defaultValue: sequelize.literal('NOW()')
        }

    });

    return Link;
};