export type Password = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  password: string | null;
  encrypted: boolean | null;
};
