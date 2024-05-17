
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';

function authMiddleware(request, response, next) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({ error: "Token não informado" });
    }

    const token = authToken.split(' ')[1];

    try {
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) {
                return response.status(401).json({ error: 'Token inválido' });
            }
            request.userId = decoded.id;
            console.log(decoded);
            return next();
        });
    } catch (err) {
        return response.status(401).json({ error: 'Token inválido' });
    }
}

export default authMiddleware;
