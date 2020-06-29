// import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import { getCustomRepository } from 'typeorm';
import TransactionsRepository from "../repositories/TransactionsRepository";
import AppError from '../errors/AppError';


interface RequestDTO{
  title:string,
  value:number,
  type:string,
  category:string
}

class CreateTransactionService {
  public async execute({title,value,type,category}:RequestDTO): Promise<void> {
   const transactionsRepository= getCustomRepository(TransactionsRepository)
   if(type=="outcome" && ((await transactionsRepository.getBalance()).total)<value){
     throw new AppError("Your outcome would be greater than your income them.")
   }
  //  const transaction=transactionsRepository.create({title,value,type,category})
  //  await transactionsRepository.save(transaction)
  //  return transaction

  }
}

export default CreateTransactionService;
