const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

// Csatlakozás a MongoDB-hez
mongoose.connect('mongodb://127.0.0.1:27017/Webfit', { useNewUrlParser: true });
const db= mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=> {
    console.log('Connected to Database')
})
const bcrypt = require('bcryptjs');
// Definiáljuk a User modelt
const User = mongoose.model('User', {
  username: String,
  password: String,
  email: String,
  BMI: Number,
  BMR: Number,
  FirstName:String,
  LastName:String,
  Phone:Number,
  Birth:Date,
});

// Regisztráció endpoint
app.post('/api/register', (req, res) => {
    const { username, password, email, FirstName,LastName,Phone,Birth, BMI,BMR } = req.body;
    bcrypt.hash(password, 10, (err, hash) => { // Hash the password
        if (err) {
            res.status(500).send(err);
        } else {
            const newUser = new User({ username, password: hash, email, FirstName, LastName,Phone, Birth,BMI,BMR }); // Save the hashed password
            newUser.save()
                .then(_result => {
                    res.status(200).send(newUser);
                })
                .catch(err => {
                    res.status(500).send(err);
                });
        }
    });
});
 

// Bejelentkezés endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username })
      .then(user => {
        if (!user) {
          res.status(401).send('Invalid credentials');
        } else {
          bcrypt.compare(password, user.password, (_err, result) => {
            if (result) {
              res.status(200).send(user);
            } else {
              res.status(401).send('Invalid credentials');
            }
          });
        }
      })
      .catch(err => {
        res.status(500).send(err);
      });
  });

// Kilépés endpoint
app.post('/api/logout', (_req, res) => {
  // Töröljük az aktuális felhasználó adatait a localStorage-ból
  res.status(200).send();
});

// Aktuális felhasználó lekérése endpoint
app.get('/api/currentUser', (_req, res) => {
  // Visszatérünk az aktuális felhasználó adataival
  res.status(200).send();
});

// Szerver indítása
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

router.put('/api/user/:username', async (req, res) => {
    const { BMI, BMR } = req.body;
    const userId = req.params.username;
  
    try {
      let user = await User.findByUsername(userId);
      if (!user) {
        return res.status(404).json({ msg: 'Felhasználó nem található' });
      }
  
      user.BMI = BMI;
      user.BMR = BMR;
  
      await user.save();
  
      res.json({ user });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Szerverhiba');
    }
  });
  module.exports = router;



  
