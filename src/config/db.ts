import mongoose from 'mongoose';
mongoose.set('strictQuery', true);
class Database {
  public db_connection_string = '';
  constructor(connection_string: string) {
    this.db_connection_string = connection_string;
  }
  async Connect() {
    try {
      await mongoose.connect(this.db_connection_string);
      console.log('⚡️⚡️⚡️⚡️⚡️⚡️⚡️Connection successfully !⚡️⚡️⚡️⚡️⚡️⚡️⚡️');
    } catch (error) {
      console.log('Connection fault');
    }
  }
}

export default Database;
