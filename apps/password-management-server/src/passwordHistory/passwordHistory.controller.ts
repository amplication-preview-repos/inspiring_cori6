import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PasswordHistoryService } from "./passwordHistory.service";
import { PasswordHistoryControllerBase } from "./base/passwordHistory.controller.base";

@swagger.ApiTags("passwordHistories")
@common.Controller("passwordHistories")
export class PasswordHistoryController extends PasswordHistoryControllerBase {
  constructor(protected readonly service: PasswordHistoryService) {
    super(service);
  }
}
