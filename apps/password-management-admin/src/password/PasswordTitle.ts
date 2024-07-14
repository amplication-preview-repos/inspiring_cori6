import { Password as TPassword } from "../api/password/Password";

export const PASSWORD_TITLE_FIELD = "password";

export const PasswordTitle = (record: TPassword): string => {
  return record.password?.toString() || String(record.id);
};
