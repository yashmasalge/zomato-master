import JWTPassport from "passport-jwt";

// Database model
import { UserModel } from "../database/allModels";

const JWTStrategy = JWTPassport.Strategy;
const ExtractJwt = JWTPassport.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "ZomatoApp",
};

export default (passport) => {
  passport.use(
    new JWTStrategy(options, async (jwt__payload, done) => {
      try {
        const doesUserExists = await UserModel.findById(jwt__payload.user);
        if (!doesUserExists) return done(null, false);
        return done(null, doesUserExists);
      } catch (error) {
        throw new Error(error);
      }
    })
  );
};
