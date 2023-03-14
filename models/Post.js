const PostSchema = new mongoose.Schema({
    userType: String,
    userName: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String
  })

 