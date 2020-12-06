import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      include: [PaymentsModule],
    }),
  ],
})
export class AppModule {}