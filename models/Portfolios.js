module.exports = (sequelize, DataTypes) => {
    const Portfolios = sequelize.define('Portfolios', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        client: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Portfolios
}