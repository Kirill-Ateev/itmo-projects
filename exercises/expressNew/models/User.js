export default (mongoose) => {
  const UserSchema = mongoose.Schema({
    login: String,
    password: { type: String, required: [true, 'Password is a necessity'] },
  });
  return mongoose.model('users', UserSchema);
};
