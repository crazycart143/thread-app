import { z } from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(), //make sure photo is string and comes from url and not empty
  name: z.string().min(3, { message: "MINIMUM 3 CHARACTERS" }).max(30), //minimum of 3 characters and maximum of 30 characters with error message
  username: z.string().min(3).max(30),
  bio: z.string().min(3).max(1000),
});
