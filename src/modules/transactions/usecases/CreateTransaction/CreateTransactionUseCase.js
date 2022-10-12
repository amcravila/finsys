import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";

export class CreateTransactionUseCase {
  constructor() {
    this.transactionsRepository = TransactionsRepository.getInstance();
  }

  execute({ title, type, category, amount }) {

    const transaction = this.transactionsRepository.create({
      title,
      type,
      category,
      amount,
    });

    return transaction;
  }
}