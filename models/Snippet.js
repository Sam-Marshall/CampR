module.exports = function(sequelize, DataTypes) {

    var Snippet = sequelize.define("Snippet", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        code: {
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