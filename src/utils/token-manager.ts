import { NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';


export const createToken = (id: string,email : string , expiresIn : string  ) => {    
    const payload = {id,email};
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {expiresIn});
    return token;
}

export const verifyToken = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const token = req.signedCookies['${COOKIE_NAME}'];
        console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        return decoded;
    } catch (error) {
        return null;
    }
}

