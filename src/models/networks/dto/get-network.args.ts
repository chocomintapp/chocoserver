import { Field, ArgsType } from "@nestjs/graphql";

@ArgsType()
export class GetNetworkArgs {
  @Field()
  chainId: number;
}
