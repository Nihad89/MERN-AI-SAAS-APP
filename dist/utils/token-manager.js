import jwt from 'jsonwebtoken';
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
    return token;
};
export const verifyToken = async (req, res, next) => {
    try {
        const token = req.signedCookies['${COOKIE_NAME}'];
        console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    }
    catch (error) {
        return null;
    }
};
//# sourceMappingURL=token-manager.js.map