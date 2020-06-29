import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
   const incommingValues= await this.find({where:{type:"income"}})
   let income=0
   incommingValues.forEach(item=>income+=item.value)
   const outcommingValues= await this.find({where:{type:"outcome"}})
   let outcome=0
  outcommingValues.forEach(item=>income+=item.value)
  return{
    income,
    outcome,
    total:income-outcome
  }

}}

export default TransactionsRepository;
