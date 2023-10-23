import * as jwt from "jsonwebtoken";
import { TokenUser } from "../types";


export class TokenHelper {

  static generateToken = (
    user: TokenUser,
    secretKey: string,
    expiresIn: number | number,
  ) => {
    return jwt.sign({ user }, secretKey, { expiresIn });
  };

  static verifyToken = (
    token: string,
    secretKey: string,
  ): jwt.JwtPayload => {
    return jwt.verify(token, secretKey) as jwt.JwtPayload;
  };

}

export const generateToken = (
  user: TokenUser,
  secretKey: string,
  expiresIn: number | number,
) => {
  return jwt.sign({ user }, secretKey, { expiresIn });
};

export const verifyToken = (
  token: string,
  secretKey: string,
): jwt.JwtPayload => {
  return jwt.verify(token, secretKey) as jwt.JwtPayload;
};