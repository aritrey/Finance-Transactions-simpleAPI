import AppError from '../errors/AppError';

import { getCustomRepository } from "typeorm";
import TransactionsRepository from "../repositories/TransactionsRepository";
import CategorysRepository from '../repositories/CategorysRepository';

class DeleteTransactionService {
  public async execute(id:string): Promise<void> {
    const categorysRepository=getCustomRepository(CategorysRepository)

console.log( await categorysRepository.find())
 const transactionsRepository= getCustomRepository(TransactionsRepository)
 const transaction = await transactionsRepository.findOne({where:{id}})
 console.log(transaction)
 if(!transaction){
throw new AppError("A transaction with this id does not exist.")
 }
// const sameTitleList= await  transactionsRepository.find({where: {title: transaction.title}})
// console.log(sameTitleList)
// if(sameTitleList.length<=1){
//   const categorysRepository=new CategorysRepository()
//   console.log(transaction.title)
//  const category= await categorysRepository.find({where: {title: transaction.title}})
// console.log(category)
//   categorysRepository.delete({id:category.id})
// }
transactionsRepository.delete({id})

  }
}

export default DeleteTransactionService;
