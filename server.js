const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Middleware pour analyser les données du formulaire
app.use(express.json());

// Chaîne de connexion MongoDB avec ton mot de passe
const mongoURI = 'mongodb+srv://facebook:92fuLcj5tzp3Pf9m@facebook.de7t1.mongodb.net/?retryWrites=true&w=majority&appName=facebook';

// Connexion à MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connecté');
  })
  .catch((err) => {
    console.log('Erreur de connexion MongoDB:', err);
  });

// Exemple de modèle d'utilisateur avec Mongoose
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Route de base
app.get('/', (req, res) => {
    res.send('Bienvenue sur le backend de ton site!');
});

// Route pour enregistrer un utilisateur
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });

  newUser.save()
    .then(() => res.send('Utilisateur enregistré !'))
    .catch((err) => res.send('Erreur : ' + err));
});

// Route pour afficher tous les utilisateurs
app.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.send('Erreur de récupération des utilisateurs : ' + err);
    } else {
      res.json(users);  // Affiche les utilisateurs enregistrés
    }
  });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
