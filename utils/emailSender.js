const nodemailer = require("nodemailer");

exports.sendEmailVerification=(email,name,token)=>{
    let transporter = nodemailer.createTransport({
        service:"email",
        auth: {
          user: process.env.EMAIL,
          pass: "hbuekvnnroanyhuu",
        },
      });

      let info ={
        from: process.env.EMAIL,
        to: email,
        subject: "Email Verification Provide by Ecommerce",
        text: "Hello"`${name}`, 
        html: `${token}`, 
      };

      transporter.sendMail(info,(err,res)=>{
        if(err) return err;
        return res;
      })
}