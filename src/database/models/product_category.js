'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_category = sequelize.define('product_category', {
    display_name: DataTypes.STRING
  }, {});
  product_category.associate = function(models) {
    product_category.hasMany(models.product)
  };
  return product_category;
};