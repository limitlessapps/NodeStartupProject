const bcrypt = require('bcrypt');
const User= require('../models/UserModel');

exports.signup = (req,res,next) =>{
    bcrypt.hash(req.body.password,8)
    .then (
        (hash) => {
            const user = new User({
                name:req.body.name,
                email:req.body.email,
                age:req.body.age,
                intern_start_date:req.body.intern_start_date,
                intern_end_date:req.body.intern_end_date,
                password:hash
            });

            user.save()
            .then(
                () => {
                    res.status(200).json({ user
                        // message:"User added successfully"
                    });
                }
            ).catch(
              (error) => {
                  res.status(400).json({
                      error:error
                  })
              }
            );
        }
    );
}


exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }).then(
      (user) => {
        if (!user) {
          return res.status(400).json({
            error: new Error('User not found!')
          });
        }

        bcrypt.compare(req.body.password, user.password).then(
          (valid) => { 
            if (!valid) {
              return res.status(400).json({
                error: new Error('Incorrect password!')
              });
            }

            res.status(200).json(user);
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }

  exports.getAllIntern = (req,res,next) =>{
    User.find().then(
      (User) =>{
        res.status(200).json(User)
      }
    ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
      };
      







