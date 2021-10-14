import dovent from 'dotenv';
dovent.config({ path: "variables.env" });

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/apicompany",
  PORT: process.env.PORT || 4000,
  SECRET: process.env.SECRET || 'SoyTripulanteUTP',
  KEY: process.env.KEY || 'kus',
  OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};