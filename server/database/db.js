import mongoose from 'mongoose';

const DBconnection = async () => {
    const MONGODB_URI = `mongodb://user:winner2004@ac-6cadske-shard-00-00.l4n4kvm.mongodb.net:27017,ac-6cadske-shard-00-01.l4n4kvm.mongodb.net:27017,ac-6cadske-shard-00-02.l4n4kvm.mongodb.net:27017/?ssl=true&replicaSet=atlas-vzdhf0-shard-0&authSource=admin&retryWrites=true&w=majority&appName=share-files`;
    try {
        await mongoose.connect(MONGODB_URI,{});
        console.log('DB connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database', error.message);
    }
}

export default DBconnection;
