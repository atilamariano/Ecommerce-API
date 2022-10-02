import mongoose from "mongoose";

export class databaseConnect {
  static async connection() {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}
