// import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import { getCustomRepository } from 'typeorm';
import TransactionsRepository from "../repositories/TransactionsRepository";
import AppError from '../errors/AppError';
import CategorysRepository from '../repositories/CategorysRepository';


interface RequestDTO{
  title:string,
  value:number,
  type:"outcome" | "income" ,
  category:string
}

class CreateTransactionService {
  public async execute({title,value,type,category}:RequestDTO): Promise<Transaction> {
    const transactionsRepository= getCustomRepository(TransactionsRepository)
    if (type=="outcome" && ((await transactionsRepository.getBalance()).total)<value){
      throw new AppError("Your outcome would be greater than your income them.")
    }
    const categorysRepository= getCustomRepository(CategorysRepository)
    let transactionCategory= await categorysRepository.findOne({where:{title:category}})
    if(transactionCategory==undefined){
      transactionCategory= categorysRepository.create({title:category})
      await categorysRepository.save(transactionCategory)
    }

    const transaction=transactionsRepository.create({title,type,value:value, category:transactionCategory})
    await transactionsRepository.save(transaction)
    return transaction

  }
}

export default CreateTransactionService;
