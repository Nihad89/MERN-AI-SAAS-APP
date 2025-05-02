import { body, validationResult } from "express-validator";
const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                return res.status(400).json({ message: result.array()[0].msg });
            }
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next();
        }
        res.status(400).json({ message: "Invalid Input" });
    };
};
export const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    body("password").trim().isLength({ min: 8 }).withMessage("Password Should Contain Atleast 8 characters"),
    body("email").trim().isEmail().withMessage("Email is required"),
];
export default validate;
//# sourceMappingURL=validator.js.map