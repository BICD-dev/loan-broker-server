import bycrypt from 'bcrypt';

export const hashPassword = (password, saltRounds = 12) => {
    const hashedPassword = bycrypt.hash(password, saltRounds);
    return hashedPassword;
}