import mongoose from 'mongoose';
class Database {
  public db_connection_string = '';
  constructor(connection_string: string) {
    this.db_connection_string = connection_string;
  }
  async Connect() {
    try {
      await mongoose.connect(this.db_connection_string);
      console.log('connection successfully !');
    } catch (error) {
      console.log('Connection fault');
    }
  }
}

export default Database;
