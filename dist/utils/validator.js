import { body, validationResult } from "express-validator";
const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
                //return res.status(400).json({ message: result.array()[0].msg })
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        //console.log(errors.array())
        res.status(400).json({ message: errors.array()[0].msg });
    };
};
export const loginValidator = [
    body("password").trim().isLength({ min: 8 }).withMessage("Password Should Contain Atleast 8 characters"),
    body("email").trim().isEmail().withMessage("Email is required")
];
export const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator
];
export default validate;
//# sourceMappingURL=validator.js.map