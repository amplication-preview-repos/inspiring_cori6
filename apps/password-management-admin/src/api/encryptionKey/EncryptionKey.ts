export type EncryptionKey = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  key: string | null;
  active: boolean | null;
};
