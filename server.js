const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


// Sendgrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/order/order', (req, response) => {
  
  const {
    firstName,
    lastName,
    address,
    city,
    phone,
    email,
    text,
    rng,
    cartItems,
    total
  } = req.body;

  const date = new Date().toLocaleDateString();

  const time = new Date().toLocaleTimeString();


  const orderedItems = cartItems.map((cartItem) => {
    return {
        "name": cartItem.name,
        "price": cartItem.price,
        "quantity": cartItem.quantity,
        "imageUrl": cartItem.imageUrl
    }
  })

  let items = JSON.stringify({orderedItems})
  items = JSON.parse(items)
  

  const msg = {
    to: [process.env.MAIL,`${email}`],
    from: 'office@honeyfarm.com',
    templateId: 'd-dee0eb402e8a49aaa7422f1337be50ec',
    dynamic_template_data: {
      subject: 'Narudzbina',
      rng: `#${rng}`,
      date: `${date}`,
      time: `${time}`,
      firstName: `${firstName}`,
      lastName: `${lastName}`,
      address: `${address}`,
      city: `${city}`,
      phone: `${phone}`,
      email: `${email}`,
      text: `${text}`,
      total: `${total} din.`,
      items
    }
  }
  
  sgMail.send(msg).then(() => console.log('Email sent succesfully!'))
  .catch((error) => {console.log(error)})
})

app.post('/contact/mail', (req, response) => {
  
  const {name, email, text} = req.body;

  const msg = {
    to: process.env.MAIL,
    from: 'office@honeyfarm.com',
    templateId: 'd-1e2af21564274cf09c47b55a4d113878',
    dynamic_template_data: {
      subject: 'Poruka sa Honey Farm',
      name: `${name}`,
      email: `${email}`,
      text: `${text}`
    }
  }

  sgMail.send(msg).then(() => console.log('Email sent succesfully!'))
  .catch((error) => {console.log(error)})
})


// NODEMAILER
// app.post('/contact/mail', (req, res) => {
//   const mail = req.body
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'alexstweb@gmail.com',
//       pass: 'alex1983'
//     }
//   })

//   const mailOptions = {
//     from: mail.email,
//     to: 'alexstweb@gmail.com',
//     subject: `Poruka od ${mail.name}`,
//     html: `
//     <h3>Informacije</h3>
//     <ul>
//       <li>Ime: ${mail.name}</li>
//       <li>Email: ${mail.email}</li>
//     </ul>

//     <h3>Poruka: </h3>
//     <p>${mail.text}</p>
//     `
//   }

//   transporter.sendMail(mailOptions, (error, response) => {
//     if (error) {
//       console.log('Doslo je do greske: ', error)
//     } else {
//       console.log('Success!')
//     }
//   })
//   transporter.close()
// })


if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, 'client/build')));
   
   app.get('*', function(req, res){
       res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
   })
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
});


//Stripe

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// app.post('/payment', (req, res) => {
//     const body = {
//         source: req.body.token.id,
//         amount: req.body.amount,
//         currency: 'usd'
//     };
//     stripe.charges.create(body, (stripeErr, stripeRes) => {
//         if (stripeErr) {
//             res.status(500).send({error: stripeErr})
//         } else {
//             res.status(200).send({success: stripeRes})
//         }
//     })
// })