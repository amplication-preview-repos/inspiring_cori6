import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PasswordHistoryCreateInput = {
  password?: string | null;
  encrypted?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
