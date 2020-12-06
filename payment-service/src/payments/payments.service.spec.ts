import { Test, TestingModule } from '@nestjs/testing';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { Payment } from './entities/payment.entity';
import { PaymentsService } from './payments.service';

describe('PaymentsService', () => {
  let service: PaymentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentsService],
    }).compile();

    service = module.get<PaymentsService>(PaymentsService);
  });

  it('create new payment', () => {
    let createPaymentDto: CreatePaymentDto = new CreatePaymentDto();
    createPaymentDto.id = '123';
    createPaymentDto.amount = 1000.0;
    createPaymentDto.sender = 'DE49XXXXX123';
    createPaymentDto.receiver = 'DE49XXXXX123';
    service.create(createPaymentDto);

    expect(service.findOne(createPaymentDto.id)).toBeInstanceOf(Payment);
    
  });
});
