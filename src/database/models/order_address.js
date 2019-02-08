'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_address = sequelize.define('order_address', {
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    cep: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  order_address.associate = function(models) {
    order_address.hasOne(models.order)
  };
  return order_address;
};