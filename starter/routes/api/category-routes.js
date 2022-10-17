const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {const CategoryData = await Category.findAll({
      include: [{category_id: price}, {category_name: tag_id}],
      });
      res.status(200).json(CategoryData);
    } catch (err) {
      res.status(500).json(err);
    }
});


router.get('/:id', (req, res) => {
  try {
  const CategoryData = await Product.findByPK(req.params.id, {
    include: [{model: ProductTag }]
  });
  if (!Category) {
    res.status(404).json({ message: "not found"})
    return;
  }
  res.status(200).json(CategoryData);
} catch (err) {
  res.status(500).json(err);
}
  // find one category by its `id` value
  // be sure to include its associated Products
});


router.post('/', (req, res) => {
  // create a new category
  try {
    const locationData = await Category.create({
      category_id: req.body.category_id,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', (req, res) => {
  // update a category by its `id` value
});


router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const CategoryData = await Catagory.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (!CategoryData) {
      res.status(404).json({message: 'none'});
      return;
    }
    res.status (200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  });


module.exports = router;




