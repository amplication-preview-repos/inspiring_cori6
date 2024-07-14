/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PasswordHistoryService } from "../passwordHistory.service";
import { PasswordHistoryCreateInput } from "./PasswordHistoryCreateInput";
import { PasswordHistory } from "./PasswordHistory";
import { PasswordHistoryFindManyArgs } from "./PasswordHistoryFindManyArgs";
import { PasswordHistoryWhereUniqueInput } from "./PasswordHistoryWhereUniqueInput";
import { PasswordHistoryUpdateInput } from "./PasswordHistoryUpdateInput";

export class PasswordHistoryControllerBase {
  constructor(protected readonly service: PasswordHistoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PasswordHistory })
  async createPasswordHistory(
    @common.Body() data: PasswordHistoryCreateInput
  ): Promise<PasswordHistory> {
    return await this.service.createPasswordHistory({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        password: true,
        encrypted: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PasswordHistory] })
  @ApiNestedQuery(PasswordHistoryFindManyArgs)
  async passwordHistories(
    @common.Req() request: Request
  ): Promise<PasswordHistory[]> {
    const args = plainToClass(PasswordHistoryFindManyArgs, request.query);
    return this.service.passwordHistories({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        password: true,
        encrypted: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PasswordHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async passwordHistory(
    @common.Param() params: PasswordHistoryWhereUniqueInput
  ): Promise<PasswordHistory | null> {
    const result = await this.service.passwordHistory({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        password: true,
        encrypted: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PasswordHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePasswordHistory(
    @common.Param() params: PasswordHistoryWhereUniqueInput,
    @common.Body() data: PasswordHistoryUpdateInput
  ): Promise<PasswordHistory | null> {
    try {
      return await this.service.updatePasswordHistory({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          password: true,
          encrypted: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PasswordHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePasswordHistory(
    @common.Param() params: PasswordHistoryWhereUniqueInput
  ): Promise<PasswordHistory | null> {
    try {
      return await this.service.deletePasswordHistory({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          password: true,
          encrypted: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}