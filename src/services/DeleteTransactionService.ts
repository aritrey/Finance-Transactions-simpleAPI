import AppError from '../errors/AppError';

import { getCustomRepository } from "typeorm";
import TransactionsRepository from "../repositories/TransactionsRepository";

class DeleteTransactionService {
  public async execute(id:string): Promise<void> {

 const transactionsRepository= getCustomRepository(TransactionsRepository)
 const transaction = transactionsRepository.findOne({where:{id}})
 if(!transaction){
throw new AppError("A transaction with this id does not exist.")
 }


  }
}

export default DeleteTransactionService;
