import { Field, ArgsType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@ArgsType()
export class GetBlocksArgs {
  @Field(() => [Number], { nullable: true })
  @IsOptional()
  blockNumbers?: number[];

  @Field(() => [Number], { nullable: true })
  @IsOptional()
  chainIds?: number[];
}
