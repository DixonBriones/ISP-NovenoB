import * as mongoose from 'mongoose';

export const TutoradoSchema = new mongoose.Schema(
  {
    identificacion: { type: String, required: true },
    nombre: { type: String, required: true },
    direccion: { type: String, required: true }
  },
  { timestamps: true },
);

TutoradoSchema.index({ nombre: 1 }, { unique: true });
TutoradoSchema.index({ identificacion: 1 }, { unique: true });
