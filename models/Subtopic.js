module.exports = function(sequelize, DataTypes) {

    var Subtopic = sequelize.define("Subtopic", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
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
    }, {
        classMethods: {
            associate: function(models) {

                this.hasMany(models.Snippet, {
                    foreignKey: 'subtopic_id',
                    onDelete: "cascade"
                });

                this.hasMany(models.Comment, {
                    foreignKey: 'subtopic_id',
                    onDelete: "cascade"
                });

            }
        }
    });

    return Subtopic;
};