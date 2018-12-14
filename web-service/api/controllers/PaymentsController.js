/**
 * PaymentsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: async(req,res)=>{
        try{
            let params = req.body;
            let fromUser = req.user;

            if(fromUser.availableAmount < parseFloat(params.amount)){
                return res.badRequest("You do not have sufficient balance to make this transfer");
            }

            let toUser = await Users.findOne({email:params.to});
            if(!toUser){
                return res.badRequest("Please provide correct id for user whom transfer is made");
            }

            let payment = await Payments.create({amount:params.amount,to:toUser.id,from:fromUser.id}).fetch();
            fromUser.availableAmount -= parseFloat(params.amount);
            await Users.update({id:fromUser.id},{availableAmount:fromUser.availableAmount });
            toUser.availableAmount += parseFloat(params.amount);
            await Users.update({id:toUser.id},{availableAmount:toUser.availableAmount });
            let paymentData = await Payments.findOne({id:payment.id}).populateAll();
            return res.created(paymentData)

        }catch(error){  
            return res.serverError("Database error");
        }
    },

    find:async(req,res)=>{
        
        try{
            let paymentsTransferred = await Payments.find({from:req.user.id}).populateAll();
            let paymentsRecived = await Payments.find({to:req.user.id}).populateAll();
            return res.ok({paymentsTransferred:paymentsTransferred,paymentsRecived:paymentsRecived});
        }catch(error){
            return res.serverError("Database error");
        }
    }

};

