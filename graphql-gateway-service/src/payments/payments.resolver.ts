import { Resolver, Query, Args } from '@nestjs/graphql';
import { PaymentsService } from './payments.service';

@Resolver('Payment')
export class PaymentsResolver {
  constructor(private readonly paymentsService: PaymentsService) {}
 
  @Query('payments')
  findAll() {
    return this.paymentsService.findAll();
  }

  @Query('payment')
  findOne(@Args('id') id: number) {
    return this.paymentsService.findOne(id);
  }

}
