import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";
import { UpdateTransactionUseCase } from "./UpdateTransactionUseCase.js";
import { UpdateTransactionController } from "./UpdateTransactionController.js";

const transactionsRepository = TransactionsRepository.getInstance();

const updateTransactionUseCase = new UpdateTransactionUseCase(transactionsRepository);

const updateTransactionController = new UpdateTransactionController(
  updateTransactionUseCase
);

export { updateTransactionController };