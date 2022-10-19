import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";

export class DeleteTransactionUseCase {
  constructor() {
    this.transactionsRepository = TransactionsRepository.getInstance();
  }

  execute(id) {
    return this.transactionsRepository.deleteById(id);
  }
}