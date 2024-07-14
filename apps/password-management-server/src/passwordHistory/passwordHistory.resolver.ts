import * as graphql from "@nestjs/graphql";
import { PasswordHistoryResolverBase } from "./base/passwordHistory.resolver.base";
import { PasswordHistory } from "./base/PasswordHistory";
import { PasswordHistoryService } from "./passwordHistory.service";

@graphql.Resolver(() => PasswordHistory)
export class PasswordHistoryResolver extends PasswordHistoryResolverBase {
  constructor(protected readonly service: PasswordHistoryService) {
    super(service);
  }
}
