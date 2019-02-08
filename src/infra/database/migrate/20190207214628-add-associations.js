'use strict';

function addProductAssociations ( queryInterface, Sequelize) {
  //product belongsTo product_category
  return queryInterface.addColumn (
    'products',
    'product_category_id',
    { 
      type: Sequelize.INTEGER,
      references: 
      { 
        model: 'product_categories',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
  )
  .then(() => {
    //product_image belongsTo product
    return queryInterface.addColumn (
      'product_images',
      'product_id',
      {
        type: Sequelize.INTEGER,
        references:
        {
          model: 'products',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    )
  })
}

function removeProductsAssociation (queryInterface, Sequelize) {
//remove products belongsTo product_category
  return queryInterface.removeColumn(
    'products',
    'product_category_id'
  )
    .then(() => {
      //remove product_image belongsTo product
      'product_images',
      'product_id'
    })
}

function addUserAssociations (queryInterface, Sequelize) {
  //user_address belongsTo user
  return queryInterface.addColumn (
    'user_addresses',
    'user_id',
    { 
      type: Sequelize.INTEGER,
      references: 
      { 
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  )
  .then(() => {
    //order belongsTo user
    return queryInterface.addColumn (
      'orders',
      'user_id',
      {
        type: Sequelize.INTEGER,
        references:
        {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  })
}

function removeUsersAssociation (queryInterface, Sequelize) {
  //remove user_address belongsTo user
    return queryInterface.removeColumn(
      'user_addresses',
      'user_id'
    )
      .then(() => {
        //remove order belongsTo user
        'orders',
        'user_id'
      })
}

function addOrdersAssociations ( queryInterface, Sequelize) {
  //order_items belongsTo order
  return queryInterface.addColumn (
    'order_items',
    'order_id',
    { 
      type: Sequelize.INTEGER,
      references: 
      { 
        model: 'orders',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  )
  .then(() => {
    //order belongsTo order_addresses
    return queryInterface.addColumn (
      'orders',
      'shipping_address_id',
      {
        type: Sequelize.INTEGER,
        references:
        {
          model: 'order_addresses',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    )
  })
  .then(() => {
    //order belongsTo order_addresses
    return queryInterface.addColumn (
      'orders',
      'billing_address_id',
      {
        type: Sequelize.INTEGER,
        references:
        {
          model: 'order_addresses',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    )
  })
}

function removeOrdersAssociation (queryInterface, Sequelize) {
  //remove orders_items belongsTo order
    return queryInterface.removeColumn(
      'orders_items',
      'order_id'
    )
      .then(() => {
        //remove order belongsTo order_addresses
        'orders',
        'shipping_address_id'
      })
      .then(() => {
        //remove order belongsTo order_addresses
        'orders',
        'billing_address_id'
      })
}

module.exports = {
  up: (queryInterface, Sequelize) => {

    return addProductAssociations(queryInterface, Sequelize)
      .then (() => {
        return addUserAssociations(queryInterface, Sequelize)
        .then(() => {
          return addOrdersAssociations(queryInterface, Sequelize)
        })
      })    
  },

  down: (queryInterface, Sequelize) => {

    return removeProductsAssociation(queryInterface, Sequelize)
      .then(() => {
        return removeUsersAssociation(queryInterface, Sequelize)
        .then(() => {
          return removeOrdersAssociation(queryInterface, Sequelize)
        })
      })
  }
};
