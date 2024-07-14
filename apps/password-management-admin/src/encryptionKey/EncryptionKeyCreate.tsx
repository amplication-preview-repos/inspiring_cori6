import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const EncryptionKeyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="key" source="key" />
        <BooleanInput label="active" source="active" />
      </SimpleForm>
    </Create>
  );
};
