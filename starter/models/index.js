// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product, {
});
// Categories have many Products

Product.belongsTo(Tag, {
  Tag: 'ProductTag',
});
// Products belongToMany Tags (through ProductTag)

Tag.belongsTo(Product, {
  product_id: "id"
});
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


