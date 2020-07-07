import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import DeleteTransactionService from '../services/DeleteTransactionService';
import ImportTransactionsService from '../services/ImportTransactionsService';

const transactionsRouter = Router();

transactionsRouter.get('/', async (request, response) => {
const transactionsRepository=getCustomRepository(TransactionsRepository)
const transactions=await transactionsRepository.find()
const balance=await  transactionsRepository.getBalance()
console.log(balance)
return response.json({transactions,balance})
});

transactionsRouter.post('/', async (request, response) => {

  const {title,value,type,category}=request.body
  const createTransaction=new CreateTransactionService()
  const newTransaction=await createTransaction.execute({title,value,type,category})
  return response.json(newTransaction)


});

transactionsRouter.delete('/:id', async (request, response) => {
  const {id}=request.params
console.log(id)
  const deleteTransaction=new DeleteTransactionService()
  deleteTransaction.execute(id)
  return response.json({"message":"deleted"})
});

transactionsRouter.post('/import', async (request, response) => {
  console.log({title,value,type,category})
  const importTransaction=new ImportTransactionsService()
  importTransaction.execute(id)
});

export default transactionsRouter;