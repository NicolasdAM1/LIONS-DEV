import mongoose from 'mongoose';

export default async function connect(uri) {
  await mongoose.connect(uri);
  console.log('MongoDB conectado');
}