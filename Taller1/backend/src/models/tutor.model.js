const mongoose = require('mongoose');
const { Schema } = mongoose;

const TutorSchema = new Schema(
  {
    cedula: { 
      type: String, 
      required:true },
    nombre: { 
      type: String,
      required:true },
    experticia: { 
      type: String,
      required:true }
  }
)
TutorSchema.methods.toJSON = function(){
  const {__v, ...data}=this.toObject();
  return data;
}

module.exports = mongoose.model('tutor', TutorSchema)
