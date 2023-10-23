import * as moment from "moment";
import {
  HttpStatus,
  compareHashedData,
  ControllerArgs,
  UnAuthorizedError,
  generateToken,
  config,
  sanitize,
  TokenHelper,
} from "../../core";


export const loginUser = async ({ input }: ControllerArgs) => {
  const { username, password } = input;

  
};
