import { z } from "zod";

export const schema = z.object({
  firstName: z.string().min(1, { message: "Last name is invalid" }),
  lastName: z.string().min(1, { message: "Last name is invalid" }),
  email: z.string().email({ message: "Invalid email address" }),
  discord: z.string().min(1, { message: "Invalid Discord Username" }),

  project: z.string().min(1, { message: "A project title must be provided" }),
  slides: z.string().min(1, { message: "A slides deck must be provided" }),
  design: z.string().min(1, { message: "A design file must be provided" }),
  devpost: z.string().min(1, { message: "A Devpost link must be provided" }),
  copilot: z.enum(["Yes", "No"] as [string, ...string[]], {
    message: "Please select an MLH Track option",
  }),

  requirements: z
    .array(z.string())
    .min(1, { message: "You must agree to the terms and conditions" }),
});
