import { SortOrder } from "../../util/SortOrder";

export type EncryptionKeyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  key?: SortOrder;
  active?: SortOrder;
};
