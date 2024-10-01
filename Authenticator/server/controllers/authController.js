const User = require('../models/userModels')
const createError = require('../utils/appError')
const bycript = require('bcrypt')
const jwt = require('jsonwebtoken')


//Register User
exports.signup = async (req,res,next) => {
    try {
        //verificando se existe
        const user = await User.findOne({email:req.body.email})
        if(user){
            return next(new createError('User already exists', 400))
        }
         
        //criptografando a senha
        const hashedPass = await bycript.hash(req.body.password,12)
        //criando novo usuario
        const newUser = await User.create({
            ...req.body, 
            password: hashedPass,
        })

        //gerar token de acesso
        const token = jwt.sign(
            {_id:newUser._id},
            'secretkey123',
            {expiresIn:'90d'}

        )
       res.status(201).json({
        status:'success',
        message: 'User Registered',
        token
       })

    } catch (error) {
        next(error)
    }
}



//loggin User

exports.login = async (req,res,next) => {
        try {
          const {email, password} = req.body;
          const user = await User.findOne({email})

          if(!user) return next(new createError("User not found",400))

          const isPasswordValid = await bycript.compare(password,user.password)

          if(!isPasswordValid){
            return next(new createError('Incorrect email or password',401))
          }
  //gerar token de acesso
         const token = jwt.sign(
        {_id:user._id},
        'secretkey123',
        {expiresIn:'90d'})
        res.status(200).json({
            status:'success',
            token,
            message:'Logged in successfully',
            user: {
                _id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,
                token
            }
        })


        } catch(error) {
               next(error)
        }
}