'use strict';
module.exports = (sequelize, DataTypes) => {
  const payment_method = sequelize.define('payment_method', {
    display_name: DataTypes.STRING
  }, {});
  payment_method.associate = function(models) {
    // associations can be defined here
  };
  return payment_method;
};