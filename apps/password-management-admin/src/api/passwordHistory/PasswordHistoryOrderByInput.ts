import { SortOrder } from "../../util/SortOrder";

export type PasswordHistoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  password?: SortOrder;
  encrypted?: SortOrder;
  userId?: SortOrder;
};
