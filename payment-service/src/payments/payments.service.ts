import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentsService {
  private payments: Array<Payment> = [];

  create(createPaymentDto: CreatePaymentDto) {
    let payment: Payment = new Payment();
    Object.assign(createPaymentDto, payment);
    this.payments.push(payment);
  }

  findAll() {
    return this.payments;
  }

  findOne(id: string) {
    return this.payments.find(p => p.id === id);
  }

  remove(id: string) {
    this.payments = this.payments.filter(p => p.id !== id);
  }
}
