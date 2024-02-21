import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL)
      console.log(`MongoDb Connected ${mongoose.connection.host}`)
    } catch (error) {
      console.log(`MongoDb Error ${error}`.bgRed.white)
    }
}

export default connectDB