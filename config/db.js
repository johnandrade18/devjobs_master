import mongoose from 'mongoose';
import config from './config';

mongoose.connect(config.MONGODB_URI, config.OPTIONS)
.then((db) =>  console.log('Conectado a DB'))
.catch((err) => console.log(err))