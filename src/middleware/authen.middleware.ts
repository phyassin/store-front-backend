import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../myConfig'

const authenValidate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHead = req.headers.authorization
        const token = (authHead as string).split(' ')[1]
        jwt.verify(token, config.private as string)
        next()
    } catch (err) {
        res.status(401)
        res.json(`token incorrect: ${err}`)
        return
    }
}

export default authenValidate