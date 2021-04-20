import { Field, ArgsType } from "@nestjs/graphql";

@ArgsType()
export class GetBlockArgs {
  @Field()
  blockNumber: number;

  @Field()
  chainId: number;
}
