import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PasswordHistoryUpdateInput = {
  password?: string | null;
  encrypted?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
