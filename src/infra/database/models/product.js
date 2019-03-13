'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    display_name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    product_category_id: {
      type: DataTypes.INTEGER,
      field: 'product_category_id'
    }
  }, {});
  product.associate = function(models) {
    product.hasMany(models.product_image)
    product.belongsTo(models.product_category)
  };
  return product;
};
