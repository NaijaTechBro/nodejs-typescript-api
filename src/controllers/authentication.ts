import express from 'express';
import { getUserByEmail } from '../db/users';

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password, username } = req.body;

        if (!email || !password || !username) {
            return res.sendStatus(400)
        }

        const exisitingUser = await getUserByEmail(email);

        if (exisitingUser) {
            return res.sendStatus(400);
        }
        
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}