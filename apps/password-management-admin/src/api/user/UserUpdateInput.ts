import { InputJsonValue } from "../../types";
import { PasswordHistoryUpdateManyWithoutUsersInput } from "./PasswordHistoryUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  passwordHistories?: PasswordHistoryUpdateManyWithoutUsersInput;
};
