import { InputJsonValue } from "../../types";
import { PasswordHistoryCreateNestedManyWithoutUsersInput } from "./PasswordHistoryCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  passwordHistories?: PasswordHistoryCreateNestedManyWithoutUsersInput;
};
