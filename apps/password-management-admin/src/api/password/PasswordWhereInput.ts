import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PasswordWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  encrypted?: BooleanNullableFilter;
};
