import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type EncryptionKeyWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  active?: BooleanNullableFilter;
};
