import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
     {
          username: {
               type: String,
               required: [true, "Username is required !"],
               unique: true, 
          },
          email: {
               type: String,
               required: [true, "Email is required !"],
               unique: true,
               lowercase: true,
          },
          password: {
               type: String,
               required: [true, "Password is required !"],
          },
          clubName: {
               type: String,
               required: false,
          },
          role: {
               type: String,
               required: true,
               enum: ['user', 'club', 'admin'],
               default: 'user',
          }
     },
     {
          timestamps: true,
     }
);

const User = mongoose.model("User", userSchema);

export default User;