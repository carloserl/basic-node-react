// const BCRYPT_SALT_ROUNDS = 12;
// const Op = Sequelize.Op;


const config = require('./config');

const passport = require('passport'),
  localStrategy = require('passport-local').Strategy,
  usuario = require('../models/usuario.model'),
  JWTstrategy = require('passport-jwt').Strategy,
  ExtractJWT = require('passport-jwt').ExtractJwt,
  bcrypt = require('bcrypt')

//  
passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'UsuUsuario',
      passwordField: 'UsuClave',
      passReqToCallback: true,
      session: false,
    },
    (req,UsuUsuario, UsuClave, done) => {
      
      try {
        usuario.findOne({
          where: {
            UsuUsuario: UsuUsuario,
          },
        }).then(user => {
          // console.log(JSON.stringify(user));
          if (user === null) {
            return done(null, false, { message: 'bad username' });
          } else {
              if (user.UsuClave !== UsuClave) {
                console.log('passwords do not match');
                return done(null, false, { message: 'passwords do not match' });
              }
              console.log('user found & authenticated');
              return done(null, user);
          }
        });
      } catch (err) {
        done(err);
      }
    },
  ),
);

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: config.secretOrKey,
};

passport.use(
  'jwt',
  new JWTstrategy(opts, (jwt_payload, done) => {
    try {
      // console.log(JSON.stringify(jwt_payload));
      usuario.findByPk(jwt_payload.id).then(user => {
        if (user) {
          console.log('user found in db in passport');
          done(null, user);
        } else {
          console.log('user not found in db');
          done(null, false);
        }
      });
    } catch (err) {
      done(err);
    }
  }),
);
