import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
    const header = req.headers.authorization;
    if (!header) {
        return res.status(401).json({
            succes: false,
            error: "Token maquant"
        });
    }
    const token = header.split(" ") [1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            succes: false,
            error: "Token invalise"
        })
    }
}

export default authMiddleware;