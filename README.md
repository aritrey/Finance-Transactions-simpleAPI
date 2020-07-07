
_________still in progress___________________________


# Finance-Transactions-DB-API_exercise
RocketSeat BootCamp - Database Challenge; an API built with Node.js/Express 

##  Features
- returns response for following routes:<br />

    - [**GET**  *'/transactions'*]: return an Array of all transactions and the total balance  <br />
    returns json: ```{transactions: Array<{"id": uuid, title: string, value: number, type: "income"|"outcome"}>, balance:{"income":number, "outcome": number, "total": number}}>``` 
    

    - [**POST**  *'/transactions'*]: add a new transaction <br />
        requires body: ```{title: string, value: number, type: "income"|"outcome", category: string}```  <br />
        *(creates 2 tables in DB: financial transactions; transactions categories)* <br /> 
        returns json: ```{"id": uuid, title: string, value: number, type: "income"|"outcome"}```         <br />
        
    - [**DELETE**  *'/users/:id'*]: delete transaction by id <br />
       
       
    - [**POST**  *'/import'*]: import all requests within a CSV file and adds them directly to the DB <br />
      requires: a CSV file
      requires body: ```{id:uuid, title: string, value: number, type: "income"|"outcome", category: string}```  <br />
      returns:
      
   
- Returns Error for invalid requests
- a fitting frontend is still in progress:)
