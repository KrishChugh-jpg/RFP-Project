const Category = require("../models/category.model");
const RFP = require("../models/rfp.model");

const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCategory = async (req, res) => {
  const { categoryNumber } = req.params;
  try {
    const category = await Category.findOneAndUpdate({ categoryNumber }, req.body, { new: true });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCategory = async (req,res)=>{
  try{
    const {id} = req.body;
    if(!id){
      return res.status(400).json({
        error:'provide id'
      })
    }
    const ref = await Category.findByIdAndUpdate(id,{
      isActive:0
    },{new:true});
    const rfps = await RFP.find({'category':id});
    if(rfps&&rfps.length>0){
      for(const ele of rfps){
        if(ele?._id){
          const newRfp = await RFP.findByIdAndUpdate(ele?.id,{isActive:0},{new:true});
          if(!newRfp){
            throw Error('Problem in deleting rpf lists');
          }
        }
      }
    }
    if(ref){
      return res.status(200).json({
        category:ref
      });
    }
    res.status(400).json({
      err:'send appropriate id'
    })
  }
  catch(err){
    console.log(err);
    res.status(500).json({ err: err.message });
  }
}

const getCategories = async (req, res) => {
  try {
    const {all} = req.params;
    let categories = null;
    if(!all){
      categories = await Category.find({isActive:1});
    }else{
      categories = await Category.find();
    }
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCategory,
  updateCategory,
  getCategories,
  deleteCategory
};
