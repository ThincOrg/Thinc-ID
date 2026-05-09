import * as mongoose from "mongoose";
import "dotenv/config";

const URI: string = process.env.URI ?? "";

const connect: Function = async (): Promise<void> => {
  await mongoose.connect(URI);

  console.log(`=> Connected to DataBase.`);
};

export default connect;
