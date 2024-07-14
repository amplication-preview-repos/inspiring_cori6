import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PasswordHistoryWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  encrypted?: BooleanNullableFilter;
  user?: UserWhereUniqueInput;
};
