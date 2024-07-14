import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PasswordList } from "./password/PasswordList";
import { PasswordCreate } from "./password/PasswordCreate";
import { PasswordEdit } from "./password/PasswordEdit";
import { PasswordShow } from "./password/PasswordShow";
import { EncryptionKeyList } from "./encryptionKey/EncryptionKeyList";
import { EncryptionKeyCreate } from "./encryptionKey/EncryptionKeyCreate";
import { EncryptionKeyEdit } from "./encryptionKey/EncryptionKeyEdit";
import { EncryptionKeyShow } from "./encryptionKey/EncryptionKeyShow";
import { PasswordHistoryList } from "./passwordHistory/PasswordHistoryList";
import { PasswordHistoryCreate } from "./passwordHistory/PasswordHistoryCreate";
import { PasswordHistoryEdit } from "./passwordHistory/PasswordHistoryEdit";
import { PasswordHistoryShow } from "./passwordHistory/PasswordHistoryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Password Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Password"
          list={PasswordList}
          edit={PasswordEdit}
          create={PasswordCreate}
          show={PasswordShow}
        />
        <Resource
          name="EncryptionKey"
          list={EncryptionKeyList}
          edit={EncryptionKeyEdit}
          create={EncryptionKeyCreate}
          show={EncryptionKeyShow}
        />
        <Resource
          name="PasswordHistory"
          list={PasswordHistoryList}
          edit={PasswordHistoryEdit}
          create={PasswordHistoryCreate}
          show={PasswordHistoryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
