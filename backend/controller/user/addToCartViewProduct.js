const addToCartModel = require("../../models/cartProduct")

const addToCartViewProduct = async(req,res)=>{
    try{
        const currentUser = req.userId

        const allProduct = await addToCartModel.find({
            userId : currentUser
        }).populate("productId")

         // Filter out items where productId is null (product was deleted)
         const validProducts = allProduct.filter(item => item.productId);
        res.json({
            data : validProducts,
            success : true,
            error : false
        })

    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports =  addToCartViewProduct