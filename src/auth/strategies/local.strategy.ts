import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-jwt'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

}