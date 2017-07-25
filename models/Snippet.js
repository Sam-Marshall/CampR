module.exports = function(sequelize, DataTypes) {

    var Snippet = sequelize.define("Snippet", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        code1: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        code2: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        code3: {
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

    Snippet.associate = function(models) {
        this.belongsTo(models.Subtopic, {
            foreignKey: {
                name: 'subtopic_id',
                allowNull: false
            }
        });

    }


    return Snippet;
};
