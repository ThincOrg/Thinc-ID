import * as z from "zod";

const AccountZodObject = z.object({
  username: z
    .string()
    .trim()
    .min(4, "Username too short (4 or more characters)")
    .optional(),
  email: z.email("Invalid email address").trim().toLowerCase(),
  password: z.string().min(6, "Password too short (6 or more characters)"),
});

export default AccountZodObject;
