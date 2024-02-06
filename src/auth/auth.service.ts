/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { hi: 'I am sign in' };
  }
  signup() {
    return { hi: 'I am signed up' };
  }
}
