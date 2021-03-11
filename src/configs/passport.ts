import passport from 'passport'

import {
  ExtractJwt,
  StrategyOptions,
  Strategy as JWTStrategy
} from 'passport-jwt'

const jwtOption = <StrategyOptions>{
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "SOMERANDOMSECRETFORDEVPURPOSSES#@!",
  passReqToCallback: true
}

const JWTAuthHandler = async (req: Request, done: (err: any, data: any) => void = () => {}) => {
  try {
    console.log('payload :>> ', req);
    done(null, {
      name: 'DArryl'
    })
  } catch (error) {
    throw error
  }
}

passport.use(new JWTStrategy(jwtOption, JWTAuthHandler))