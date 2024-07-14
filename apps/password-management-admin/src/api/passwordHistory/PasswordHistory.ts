import { User } from "../user/User";

export type PasswordHistory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  password: string | null;
  encrypted: boolean | null;
  user?: User | null;
};
