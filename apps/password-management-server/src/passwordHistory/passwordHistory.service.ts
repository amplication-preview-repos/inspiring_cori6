import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordHistoryServiceBase } from "./base/passwordHistory.service.base";

@Injectable()
export class PasswordHistoryService extends PasswordHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
