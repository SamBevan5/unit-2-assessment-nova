//Dependencies
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const listsController = require('./controllers/list.js');
const List = require('./models/list'); 

//Port
const PORT = process.env.PORT || 3000;

//Database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/todoList';

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true,  useUnifiedTopology: true });

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use( listsController);

app.get('/', (req, res) => {
    res.render('Index');
})

//Listener
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
