'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_address = sequelize.define('user_address', {
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    cep: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    adress_type: DataTypes.STRING,
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  user_address.associate = function(models) {
    user_address.belongsTo(models.user)
  };
  return user_address;
};