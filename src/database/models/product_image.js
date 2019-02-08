'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_image = sequelize.define('product_image', {
    url: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  product_image.associate = function(models) {
    product_image.belongsTo(models.product)
  };
  return product_image;
};