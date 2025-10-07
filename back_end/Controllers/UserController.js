import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const Register = async(req,res) => {
    try {
         const {name,email,password}=req.body
    if (!name || !email || !password)
        return res.status(422).json({error:"Missing Information"});

    if (await prisma.user.findUnique({where:{email:email}}))
    return res.status(422).json({error:`${email} does already exists`});

    const user= await prisma.user.create({
        data:{
        name:name,
        email:email,
        password:password
        }
    })
      return res.status(201).json(user)
    } 
   
    
      catch (error) {
              return res.status(500).json({error:error.message});
  
    }


}

    
