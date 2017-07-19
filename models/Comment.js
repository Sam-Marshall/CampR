module.exports = function(sequelize, DataTypes) {

    var Comment = sequelize.define("Comment", {
        comment: {
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

                this.belongsTo(models.Subtopic, {
                    foreignKey: {
                        name: 'subtopic_id',
                        allowNull: false
                    }
                });

            }
        }
    });

    return Comment;
};