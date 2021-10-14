const mongoose = require("mongoose");

const vacantesSchema =  mongoose.Schema({
    titulo: {
        type: String,
        required: 'El nombre de la vacante es obligatorio',
        trim : true
    },
    empresa: {
        type: String,
        trim: true
    },
    ubicacion: {
        type: String,
        trim: true,
        required: 'La ubicación es obligatoria'
    },
    salario: {
        type: String,
        default: 0,
        trim: true,
    },
    contrato: {
        type: String,
        trim: true,
    },
    descripcion: {
        type: String,
        trim: true,
    },
    //Generate URL
    url : {
        type: String,
        lowercase:true
    },
    estado:{
        type: Boolean,
        default: 1
    },
    skills: String,
    // candidatos: [{
    //     nombre: String,
    //     email: String,
    //     cv : String
    // }],
    // autor : {
    //     type: String,
    //     ref: 'Usuarios',
    //     required: 'El autor es obligatorio'
    // }
});
// vacantesSchema.pre('save', function(next) {
//     // crear la url
//     const url = slug(this.titulo);
//     this.url = `${url}-${shortid.generate()}`;
//     next();
// })

// Crear un indice
vacantesSchema.index({ titulo : 'text' });


module.exports = mongoose.model("Vacante", vacantesSchema);