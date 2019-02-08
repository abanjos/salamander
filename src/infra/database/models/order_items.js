'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_items = sequelize.define('order_items', {
    product_name: DataTypes.STRING,
    product_description: DataTypes.STRING,
    product_price: DataTypes.INTEGER,
    product_cover: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  order_items.associate = function(models) {
    order_items.belongsTo(models.order)
  };
  return order_items;
};