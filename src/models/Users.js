import mongoose from 'mongoose';

import { STATUS_PENDING } from '../utils/constants';

const UsersSchema = new mongoose.Schema({
    name: String,
    email: { type: String, default: null },
    password: { type: String, default: null },
    status: { type: String, default: STATUS_PENDING },
    picture: { type: String, default: null },
}, { timestamps: true });

const Users = mongoose.model('users', UsersSchema);

export default Users;
