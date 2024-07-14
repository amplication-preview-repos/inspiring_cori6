import { PasswordHistoryWhereInput } from "./PasswordHistoryWhereInput";
import { PasswordHistoryOrderByInput } from "./PasswordHistoryOrderByInput";

export type PasswordHistoryFindManyArgs = {
  where?: PasswordHistoryWhereInput;
  orderBy?: Array<PasswordHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
