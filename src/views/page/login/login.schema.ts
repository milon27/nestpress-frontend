import z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
export type ILoginSchema = z.infer<typeof LoginSchema>;
