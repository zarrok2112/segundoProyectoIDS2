import mongoose from 'mongoose';

export const startConnection = async () => {
    // const url = 'mongodb+srv://zarrok@admin:zarrok@uao.kjxhcot.mongodb.net/';
    const url = encodeURI('mongodb+srv://zarrokUao:thcqh0pIdF5meErY@cluster0.lgkqjlw.mongodb.net/?retryWrites=true&w=majority')

    await mongoose.connect(url);
}
