import { Field, ArgsType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@ArgsType()
export class GetNetworksArgs {
  @Field(() => [Number], { nullable: true })
  @IsOptional()
  chainIds?: number[];
}
