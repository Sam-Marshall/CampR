module.exports = function(sequelize, DataTypes) {

    var Topic = sequelize.define("Topic", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        paragrah1: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        paragrah2: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        paragrah3: {
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

                this.hasMany(models.Subtopic, {
                    foreignKey: 'topic_id',
                    onDelete: "cascade"
                });

            }
        }
    });

    return Topic;
};