import { Module } from "@nestjs/common";
import { PasswordHistoryModuleBase } from "./base/passwordHistory.module.base";
import { PasswordHistoryService } from "./passwordHistory.service";
import { PasswordHistoryController } from "./passwordHistory.controller";
import { PasswordHistoryResolver } from "./passwordHistory.resolver";

@Module({
  imports: [PasswordHistoryModuleBase],
  controllers: [PasswordHistoryController],
  providers: [PasswordHistoryService, PasswordHistoryResolver],
  exports: [PasswordHistoryService],
})
export class PasswordHistoryModule {}
