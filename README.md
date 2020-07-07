

# Finance Transactions - simple API
RocketSeat BootCamp - API for Financial Transactions

##  Features
- returns response for following routes:<br />

    - [**GET**  *'/transactions'*]: return an Array of all transactions and the total balance  <br />
    returns json: ```{transactions: Array<{"id": uuid, title: string, value: number, type: "income"|"outcome"}>, balance:{"income":number, "outcome": number, "total": number}}>``` 
    

    - [**POST**  *'/transactions'*]: add a new transaction <br />
        requires body: ```{title: string, value: number, type: "income"|"outcome", category: string}```  <br />
        *(creates 2 tables in DB: financial transactions; transactions categories)* <br /> 
        returns json: ```{"id": uuid, title: string, value: number, type: "income"|"outcome"}```         <br />
        
- Returns Error for invalid requests

