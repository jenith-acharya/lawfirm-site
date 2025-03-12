const bcrypt = require('bcryptjs');
const mailService = require('../../services/mail.service');
const { randomStringGenerator } = require('../../utils/helper');
const teamService = require('../team members/teammember.services')
const { statusType } = require('../../config/constants.config');
const jwt = require ('jsonwebtoken');
const teamService = require('../team members/teammember.services');

class AuthController{

    loginUser = async (req,res,next)=>{

        try {
            const {email,password} =  req.body;
                console.log(email,password);
            // access user 
            const team = await teamService.getSingleUserByFilter({email})
                console.log(team);
            if (bcrypt.compareSync(password,team.password)==true) {
                if(team.status==statusType.ACTIVE || 'active'){
                    const token = jwt.sign({sub:team._id}
                    ,process.env.JWT_SECRET,
                    // {expiresIn:'1 day',algorithm:}
                      );

                      //refresh token

                      res.json({
                        result:{
                            teamDetail:{
                                _id:team._id,
                               name:team.name,
                               email:team.email,
                               role:team.role,  
                            },
                            token
                            },
                            message:"Login Success",
                            meta:null
                        });
                      }
                else{
                    throw {statusCode:422,message:`Your account has not been activated yet`}
                }
            } else {
                throw {statusCode:422,message:`Credentials do not match`}
            }
        } catch (exception) {
            console.log(exception)
            next(exception);
        }
    }

    registerUser = async (req,res,next)=>{

        try {
        
        let data = req.body;
        // data transformation
          data = teamService.transformUserCreate(req);

         console.log(data);
         //Database store
           const user = await teamService.createUser(data)
        
        //  sending mail service
        
        await teamService.sendActivationEmail(data);
        
        
        // sending response
        res.status(200).json ({
            result: user|| null,
            message:"User registered successfull. Activation token sent successfull",
            meta: null
        })
            } catch (error) {
                console.log(error)
                next(error);
            }
        
        }
    getLoggedInUser =   async (req,res,next)=>{
        try {
           
            res.json({
                result: req.authUser,
                message: 'User fetched successfully',
                meta: null
            })
            
        } catch (exception) {
            console.log('at getLoggedInUser authcontroller', exception);
            next(exception);
        }
    }

    activateUser = async (req,res,next)=>{
        try {
            const {token} = req.params;
            if (token.length !== 20){
               throw {statusCode: 422, message: 'Invalid activationToken'}
            }
             const team =  await  teamService.getSingleUserByFilter({activationToken:token});
             console.log(team);
            
            const today = Date.now();
            const activateFor = new Date(team.activatedFor).getTime();
            // change the activateFor to date so we can compare with today variable
            console.log(today, activateFor);
            

            if (today > activateFor){
                throw {statusCode: 422, message: 'Token Expired'}
            }
            team.activationToken = null;
            team.activatedFor = null;
            team.status = statusType.ACTIVE;
            await team.save();   //insert or update

            res.json({
                result: null,
                message: 'User activated successfully. Please login to continue.',
                meta: null
            })


        } catch (exception) {
            console.log(exception);
            next(exception);
        }
    }

resendActivationToken = async (req,res,next)=>{
    try {
        const {token} = req.params;
        const team = await teamService.getSingleUserByFilter({token});

         team = userService.generateUserActivationToken(team);

         await team.save();  //insert or update
        await teamService.sendActivationEmail({
            email: team.email,
            activationToken: team.activationToken,
            name: team.name,
            sub: 'User activation token'
        });

        res.json({
            result: null,
            message: 'Activation token sent successfully',
            meta: null
        });



    } catch (exception) {
      next(exception);
    }
}

refreshToken = async (req,res,next)=>{
    try {
        const token = req.headers['authorization'] || null;
        if(!token){
            throw {statusCode: 401, message: 'Token required'}
        }
        token = token.split(' ')[1];
        const {sub,type} = jwt.verify(token,process.env.JWT_SECRET);

        if(!type || type !== 'refresh'){
            throw {statusCode: 401, message: 'Refresh token required'}
        }

        await teamService.getSingleUserByFilter({_id:sub});

        const accessToken = jwt.sign({sub},process.env.JWT_SECRET,{expiresIn:'1 day'});
        
        const refreshToken = jwt.sign({sub,type:'refresh'},process.env.JWT_SECRET,{expiresIn:'1 day'});
        
        res.json({
            result:{
                token :accessToken,
                refreshToken:refreshToken,
            },
            message:'Token refreshed successfully',
            meta:null
        })
    } catch (exception) {
        console.log(exception);
        next(exception);
    }
}

}

//  create an instance of the controller
const authcontroller = new AuthController();



//  exporting the authcontroller object
module.exports = authcontroller