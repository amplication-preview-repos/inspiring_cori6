import { EncryptionKey as TEncryptionKey } from "../api/encryptionKey/EncryptionKey";

export const ENCRYPTIONKEY_TITLE_FIELD = "key";

export const EncryptionKeyTitle = (record: TEncryptionKey): string => {
  return record.key?.toString() || String(record.id);
};
