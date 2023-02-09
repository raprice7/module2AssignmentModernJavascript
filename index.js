
  var loanArray = [
    {
        id: 12345,
        customerName: 'Jane Fonda',
        phoneNumber: '123456789',
        address: '123 Happy Avenue',
        loanAmount: 250000,
        interest: 0.06,
        loanTermYears: 10,
        loanType: 'Business',
        description: 'descripton of loan',
        calculatedLoanAmount:  (loanAmount, interest, loanTermYears) =>{
            return loanAmount + (loanAmount * interest * loanTermYears)
        }
       },
    {
        id: 23456,
        customerName: 'Dwayne Johnson',
        phoneNumber: '123456789',
        address: '123 Happy Avenue',
        loanAmount: 360000,
        interest: 0.0375,
        loanTermYears: 15,
        loanType: 'Auto',
        description: 'description of loan',
        calculatedLoanAmount:  (loanAmount, interest, loanTermYears) =>{
            return loanAmount + (loanAmount * interest * loanTermYears)
        }
    },
    {
        id: 34567,
        customerName: 'Lady Gaga',
        phoneNumber: '123456789',
        address: '123 Happy Avenue',
        loanAmount: 100000000,
        interest: 0.075,
        loanTermYears: 30,
        loanType: 'Mortgage',
        description: 'description of loan',
        calculatedLoanAmount:  (loanAmount, interest, loanTermYears) =>{
            return loanAmount + (loanAmount * interest * loanTermYears)
        }
    },
    {
        id: 01234,
        customerName: 'Brad Pitt',
        phoneNumber: '123456789',
        address: '123 Happy Avenue',
        loanAmount: 950000,
        interest: 0.050,
        loanTermYears: 15,
        loanType: 'Mortgage',
        description: 'description of loan',
        calculatedLoanAmount:  (loanAmount, interest, loanTermYears) =>{
            return loanAmount + (loanAmount * interest * loanTermYears)
        }
    },
    {
        id: 01265,
        customerName: 'Johnny Depp',
        phoneNumber: '123456789',
        address: '123 Happy Avenue',
        loanAmount: 1000000,
        interest: 0.025,
        loanTermYears: 10,
        loanType: 'Personal',
        description: 'description of loan',
        calculatedLoanAmount:  (loanAmount, interest, loanTermYears) =>{
            return loanAmount + (loanAmount * interest * loanTermYears)
        }
    }
  ]
   


  console.log(`Total loan amount for ${loanArray[0].customerName} is $${loanArray[0].calculatedLoanAmount(loanArray[0].loanAmount, loanArray[0].interest, loanArray[0].loanTermYears)}.`);
  console.log(`Total loan amount for ${loanArray[1].customerName} is $${loanArray[1].calculatedLoanAmount(loanArray[1].loanAmount, loanArray[1].interest, loanArray[1].loanTermYears)}.`);
  console.log(`Total loan amount for ${loanArray[2].customerName} is $${loanArray[2].calculatedLoanAmount(loanArray[2].loanAmount, loanArray[2].interest, loanArray[2].loanTermYears)}.`);
  console.log(`Total loan amount for ${loanArray[3].customerName} is $${loanArray[3].calculatedLoanAmount(loanArray[3].loanAmount, loanArray[3].interest, loanArray[3].loanTermYears)}.`);
  console.log(`Total loan amount for ${loanArray[4].customerName} is $${loanArray[4].calculatedLoanAmount(loanArray[4].loanAmount, loanArray[4].interest, loanArray[4].loanTermYears)}.`);
