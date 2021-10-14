const express = require ('express');
const dovent = require ('dotenv');
const morgan = require ('morgan');
const cors = require ('cors');
const helmet = require ('helmet');
require("./config/db")
const cookieParser = require ("cookie-parser");
const session = require ("express-session");
const MongoStore = require ('connect-mongo');
const router = require ('./routes/index');
dovent.config({ path: "variables.env" });
const { createRoles, createAdmin} = require("./libs/initialSetup");
const app = express();
createRoles();
createAdmin();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

 app.use(session({
    secret: process.env.SECRET || 'SoyTripulanteUTP',
    key: process.env.KEY || 'KusKus',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.DATABASE || 'mongodb://localhost:27017/devjobs'
    })
}));

app.use('/api', router)

const port = process.env.PORT || 4000;
app.set("json spaces", 4);
app.listen(port, () => {
  console.log("Servidor Corriendo en el puerto: " + port);
});