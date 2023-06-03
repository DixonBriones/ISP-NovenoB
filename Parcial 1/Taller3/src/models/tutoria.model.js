const mongoose = require('mongoose');
const { Schema } = mongoose;

const TutoriaSchema = new Schema(
  {
    Id_Tutor: { 
      type: String, 
    },
    Id_Tutorado: { 
      type: String,
    },
    asignatura: { 
      type: String,
    },
    fecha: { 
      type: Date,
    },
    hora: { 
      type: Number,
    },
    valor: { 
      type: Number,
    }
  }
)
TutoriaSchema.methods.toJSON = function(){
  const {__v, ...data}=this.toObject();
  return data;
}

module.exports = mongoose.model('tutoria', TutoriaSchema)
