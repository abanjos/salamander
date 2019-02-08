'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_category_options = sequelize.define('product_category_options', {
    field_type: DataTypes.STRING,
    label: DataTypes.STRING
  }, {});
  product_category_options.associate = function(models) {
    
  };
  return product_category_options;
};