const nodemailer = require("nodemailer");

exports.sendEmailVerification=(email,name,token)=>{
    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
          user: process.env.EMAIL,
          pass: "hbuekvnnroanyhuu",
        },
      });

      let info ={
        from: process.env.EMAIL,
        to: email,
        subject: "Email Verification Link Provide by Ecommerce",
        text: "Hello", 
        html: "<b>Hello world?</b>", 
      };

      transporter.sendMail(info,(err,res)=>{
        if(err) return err;
        return res;
      })
}