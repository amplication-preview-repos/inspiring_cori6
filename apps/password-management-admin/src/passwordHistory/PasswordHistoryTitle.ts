import { PasswordHistory as TPasswordHistory } from "../api/passwordHistory/PasswordHistory";

export const PASSWORDHISTORY_TITLE_FIELD = "password";

export const PasswordHistoryTitle = (record: TPasswordHistory): string => {
  return record.password?.toString() || String(record.id);
};
