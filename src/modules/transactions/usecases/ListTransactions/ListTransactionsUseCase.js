import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";

import { AppException } from "../../../../application/errors/AppException.js";

export class ListTransactionsUseCase {
  constructor() {
    this.transactionsRepository = TransactionsRepository.getInstance();
  }

  async execute() {

    const transaction = await this.transactionsRepository.list();

    if (!transaction.length) {
      throw new AppException(404, "Ainda não existem transações cadastradas!");
    }

    return transaction;
  }
}