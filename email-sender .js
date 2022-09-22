

var nodemailer = require("nodemailer");

async function main() {


let transporter = nodemailer.createTransport({
    host: "127.0.0.1",
    port: 3000,
    secure: false, 
    auth: {
      user:'testAccount.user',
      pass: 'testAccount.pass', 
    }
  });


  let info = await transporter.sendMail({
    from: 'bar@example.com', 
    to: "bar@example.com",
    subject: "Hello ✔", 
    text: "Hello world?", 
    html: "<b>Hello world?</b>", 
  });

 

  console.log("Message sent: %s", info.messageId);
 


  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
 


main().catch(console.error);

}
