import { body } from "express-validator";

import { UsersRepository } from "@config/Container";

export const signUpValidator = [
  body("email", "email should be an email")
    .isEmail()
    .custom((value) => {
      return UsersRepository.findByEmail(value)
        .then((user) => {
          if (user) {
            return Promise.reject("E-mail already in use");
          }
        })
        .catch((err) => {
          return true;
        });
    }),
  body("first_name", "first name should be at least 3 charactes").isLength({
    min: 3,
  }),
  body("last_name", "first name should be at least 3 charactes").isLength({
    min: 3,
  }),
  body("password").isLength({ min: 7 }),
  body("passwordConfirm").custom((value, { req }) => {
    if (value != req.body.password) {
      throw new Error("Password confirmation does not match password");
    }
    return true;
  }),
];
