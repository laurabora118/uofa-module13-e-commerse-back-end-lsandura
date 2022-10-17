const { Model, DataTypes, DECIMAL, INTEGER } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    category_name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    product: {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      product_name: { 
          type: DataTypes.STRING,
          allowNull: false,
        },
      price: {
          type: DataTypes.DECIMAL,
          allowNull: false,
          validate: {
            isDecimal: true,
          },
        },
      stock: {
        type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            len: [10]
          },
        },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          category: 'id',
        },
      },
      {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
