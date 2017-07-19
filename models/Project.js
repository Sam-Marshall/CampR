//To store the group project info and display on our class projects page

module.exports = function(sequelize, DataTypes) {

    var Project = sequelize.define("Project", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //comma separated list of team members
        //maybe can eventually link to linkedin profiles of actual people (?)
        team: {
            type: DataTypes.TEXT,
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

    return Project;
};