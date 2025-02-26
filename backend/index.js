import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || 'secret';
const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;

app.use(bodyParser.json());
const users = [];

app.post('/sign-up', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    if(users.find(user => user.username === username)) {
        return res.status(400).json({ message: 'User already exists!' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    users.push({ username, password: hashedPassword });

    res.status(200).json({ message: 'User signed up successfully!' });
});

app.post('/sign-in', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ message: 'User logged in successfully!', token });
});

app.get('/profile', verifyToken, (req, res) => {
    res.status(200).json({ message: `Welcome ${req.username}` });
});

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const { username } = jwt.verify(token, SECRET_KEY);
        req.username = username;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});