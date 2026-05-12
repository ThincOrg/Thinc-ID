import * as z from "zod";

const AccountZodObject = z.object({
  username: z.string().trim().min(4),
  email: z.email().trim().toLowerCase(),
  password: z.string().min(6)
});

export default AccountZodObject;