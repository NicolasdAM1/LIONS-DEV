import User from '../models/user.model.js';

export default {
  create(data) {
    return User.create(data);
  },
  findAll() {
    return User.find();
  },

  findById(id) {
    return User.findById(id);
  },
  
  updateById(id, data) {
    return User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  },
  deleteById(id) {
    return User.findByIdAndDelete(id);
  },
  findByEmail(email) {
    return User.findOne({ email });
  },
};