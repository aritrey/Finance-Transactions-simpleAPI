import Transaction from '../models/Transaction';
interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];
  private income:number
  private outcome:number
  private sum:number

  constructor() {
    this.transactions = [];
    this.income=0;
    this.outcome=0;
    this.sum=0
  }

  public all(): Transaction[] {
    return this.transactions
  }

  public getBalance(): Balance {

   const ballance={
     income:this.income,
     outcome:this.outcome,
     total:this.sum
   }
   return ballance
  }


  public create({title,value,type}:Omit<Transaction,"id">): Transaction {

   if(type==="outcome")
    {
      if(this.sum-value<0){
        throw new Error("The sum can not be negative.")
      }
      this.outcome+=value}else
   { this.income+=value}

    this.sum=this.income-this.outcome

    const transaction=new Transaction( {
      title,
      value,
      type,
    })
    this.transactions.push(transaction)
    return transaction
  }
}

export default TransactionsRepository;
