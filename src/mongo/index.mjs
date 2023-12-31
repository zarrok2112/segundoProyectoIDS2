import mongoose from 'mongoose';

export const startConnection = async () => {
  const url = encodeURI(process.env.MONGO_URI);
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // eslint-disable-next-line no-console
  console.log('MongoDB connected');
};

export default startConnection;
