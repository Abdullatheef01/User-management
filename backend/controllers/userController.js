const User= require('../models/user')
exports.userController= async (req,res)=>{
    try{
        const user=await User.create({
            name:req.body.name,
            email:req.body.email
        })
        res.status(201).json({
            message:'User is added'
        })
    }
    catch (error){
        console.log(error)
        res.status(500).json({
            message:"error adding user"
        })
    }
}

// display user

exports.getUser=async(req,res)=>{
    try{
        const users=await User.find()
        res.status(200).json(users)
    }
    catch (error){
        res.status(404).json({
            message:"Error is Occured"
        })
    }
}

// delete user

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.status(200).json({
            message: 'User deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting user'
        });
    }
};

// update code

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                email: req.body.email
            },
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.status(200).json({
            message: 'User updated successfully',
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error updating user'
        });
    }
};