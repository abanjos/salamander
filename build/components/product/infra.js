"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductRepository = exports.ProductCategoryModel = exports.ProductModel = void 0;

var _sequelize = require("sequelize");

var _domain = require("./domain");

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://salamander:bnx3rhej33@localhost:5432/salamanderdev';
const sequelizeOptions = {
  operatorsAliases: false
};
const sequelize = new _sequelize.Sequelize(DATABASE_URL, {
  sequelizeOptions
});
const ProductModel = sequelize.define('product', {
  display_name: _sequelize.DataTypes.STRING,
  description: _sequelize.DataTypes.STRING,
  price: _sequelize.DataTypes.INTEGER
});
exports.ProductModel = ProductModel;
const ProductCategoryModel = sequelize.defien('product_category', {
  display_nama: _sequelize.DataTypes.STRING
});
exports.ProductCategoryModel = ProductCategoryModel;
ProductModel.belongsTo(ProductCategoryModel);
const ProductRepository = class ProductRepository {
  constructor({
    ProductModel
  }) {
    this.ProductModel = ProductModel;
  }

  async add(product) {
    const newProduct = await this.ProductModel.create({
      display_name: product.display_name,
      description: product.description,
      price: product.price
    });
    return new _domain.Product(newProduct);
  }

};
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QvaW5mcmEuanMiXSwibmFtZXMiOlsiREFUQUJBU0VfVVJMIiwicHJvY2VzcyIsImVudiIsInNlcXVlbGl6ZU9wdGlvbnMiLCJvcGVyYXRvcnNBbGlhc2VzIiwic2VxdWVsaXplIiwiU2VxdWVsaXplIiwiUHJvZHVjdE1vZGVsIiwiZGVmaW5lIiwiZGlzcGxheV9uYW1lIiwiRGF0YVR5cGVzIiwiU1RSSU5HIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIklOVEVHRVIiLCJQcm9kdWN0Q2F0ZWdvcnlNb2RlbCIsImRlZmllbiIsImRpc3BsYXlfbmFtYSIsImJlbG9uZ3NUbyIsIlByb2R1Y3RSZXBvc2l0b3J5IiwiY29uc3RydWN0b3IiLCJhZGQiLCJwcm9kdWN0IiwibmV3UHJvZHVjdCIsImNyZWF0ZSIsIlByb2R1Y3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixZQUFaLElBQTRCLCtEQUFqRDtBQUNBLE1BQU1HLGdCQUFnQixHQUFHO0FBQUVDLEVBQUFBLGdCQUFnQixFQUFFO0FBQXBCLENBQXpCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLElBQUlDLG9CQUFKLENBQWNOLFlBQWQsRUFBNEI7QUFBRUcsRUFBQUE7QUFBRixDQUE1QixDQUFsQjtBQUVBLE1BQU1JLFlBQVksR0FBR0YsU0FBUyxDQUFDRyxNQUFWLENBQWlCLFNBQWpCLEVBQTRCO0FBQzdDQyxFQUFBQSxZQUFZLEVBQUVDLHFCQUFVQyxNQURxQjtBQUU3Q0MsRUFBQUEsV0FBVyxFQUFFRixxQkFBVUMsTUFGc0I7QUFHN0NFLEVBQUFBLEtBQUssRUFBRUgscUJBQVVJO0FBSDRCLENBQTVCLENBQXJCOztBQU1BLE1BQU1DLG9CQUFvQixHQUFHVixTQUFTLENBQUNXLE1BQVYsQ0FBaUIsa0JBQWpCLEVBQXFDO0FBQzlEQyxFQUFBQSxZQUFZLEVBQUVQLHFCQUFVQztBQURzQyxDQUFyQyxDQUE3Qjs7QUFJQUosWUFBWSxDQUFDVyxTQUFiLENBQXVCSCxvQkFBdkI7QUFFQSxNQUFNSSxpQkFBaUIsR0FBRyxNQUFNQSxpQkFBTixDQUF3QjtBQUM5Q0MsRUFBQUEsV0FBVyxDQUFDO0FBQUViLElBQUFBO0FBQUYsR0FBRCxFQUVYO0FBQ0ksU0FBS0EsWUFBTCxHQUFvQkEsWUFBcEI7QUFDSDs7QUFFRCxRQUFNYyxHQUFOLENBQVVDLE9BQVYsRUFBa0I7QUFDZCxVQUFNQyxVQUFVLEdBQUcsTUFBTSxLQUFLaEIsWUFBTCxDQUFrQmlCLE1BQWxCLENBQXlCO0FBQzlDZixNQUFBQSxZQUFZLEVBQUVhLE9BQU8sQ0FBQ2IsWUFEd0I7QUFFOUNHLE1BQUFBLFdBQVcsRUFBRVUsT0FBTyxDQUFDVixXQUZ5QjtBQUc5Q0MsTUFBQUEsS0FBSyxFQUFFUyxPQUFPLENBQUNUO0FBSCtCLEtBQXpCLENBQXpCO0FBTUEsV0FBTyxJQUFJWSxlQUFKLENBQVlGLFVBQVosQ0FBUDtBQUNIOztBQWY2QyxDQUFsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSwgRGF0YVR5cGVzIH0gZnJvbSAnc2VxdWVsaXplJ1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi9kb21haW4nXHJcblxyXG5jb25zdCBEQVRBQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwgfHwgJ3Bvc3RncmVzOi8vc2FsYW1hbmRlcjpibngzcmhlajMzQGxvY2FsaG9zdDo1NDMyL3NhbGFtYW5kZXJkZXYnXHJcbmNvbnN0IHNlcXVlbGl6ZU9wdGlvbnMgPSB7IG9wZXJhdG9yc0FsaWFzZXM6IGZhbHNlIH1cclxuY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShEQVRBQkFTRV9VUkwsIHsgc2VxdWVsaXplT3B0aW9ucyB9KVxyXG5cclxuY29uc3QgUHJvZHVjdE1vZGVsID0gc2VxdWVsaXplLmRlZmluZSgncHJvZHVjdCcsIHtcclxuICAgIGRpc3BsYXlfbmFtZTogRGF0YVR5cGVzLlNUUklORyxcclxuICAgIGRlc2NyaXB0aW9uOiBEYXRhVHlwZXMuU1RSSU5HLFxyXG4gICAgcHJpY2U6IERhdGFUeXBlcy5JTlRFR0VSXHJcbn0pXHJcblxyXG5jb25zdCBQcm9kdWN0Q2F0ZWdvcnlNb2RlbCA9IHNlcXVlbGl6ZS5kZWZpZW4oJ3Byb2R1Y3RfY2F0ZWdvcnknLCB7XHJcbiAgICBkaXNwbGF5X25hbWE6IERhdGFUeXBlcy5TVFJJTkdcclxufSlcclxuXHJcblByb2R1Y3RNb2RlbC5iZWxvbmdzVG8oUHJvZHVjdENhdGVnb3J5TW9kZWwpXHJcblxyXG5jb25zdCBQcm9kdWN0UmVwb3NpdG9yeSA9IGNsYXNzIFByb2R1Y3RSZXBvc2l0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKHsgUHJvZHVjdE1vZGVsIH0pXHJcblxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuUHJvZHVjdE1vZGVsID0gUHJvZHVjdE1vZGVsXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWRkKHByb2R1Y3Qpe1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSBhd2FpdCB0aGlzLlByb2R1Y3RNb2RlbC5jcmVhdGUoeyBcclxuICAgICAgICAgICAgZGlzcGxheV9uYW1lOiBwcm9kdWN0LmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0LnByaWNlICAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdChuZXdQcm9kdWN0KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQcm9kdWN0TW9kZWwsIFByb2R1Y3RDYXRlZ29yeU1vZGVsLCBQcm9kdWN0UmVwb3NpdG9yeSB9XHJcblxyXG4iXX0=