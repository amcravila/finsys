import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";

export class ListTransactionsUseCase {
  constructor() {
    this.transactionsRepository = TransactionsRepository.getInstance();
  }

  async execute() {

    const transaction = await this.transactionsRepository.list();

    return transaction;
  }
}