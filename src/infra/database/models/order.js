'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    reference: DataTypes.STRING,
    total_price: DataTypes.INTEGER
  }, {});
  order.associate = function(models) {
    order.belongsTo(models.user)
    order.belongsTo(models.payment_method)
    order.belongsTo(models.order_address, { as: 'shipping_address', foreignKey: 'shipping_address_id' })
    order.belongsTo(models.order_address, { as: 'billing_address', foreignKey: 'billing_address_id' })
    order.hasMany(models.order_items)
  };

  return order;

};