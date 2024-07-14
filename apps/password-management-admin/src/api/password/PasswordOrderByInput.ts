import { SortOrder } from "../../util/SortOrder";

export type PasswordOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  password?: SortOrder;
  encrypted?: SortOrder;
};
