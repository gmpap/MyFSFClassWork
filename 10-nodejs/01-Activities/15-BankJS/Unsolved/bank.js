const fs = require('fs');

const DATA_FILE = "bank.txt"
const command = procees.argv[2];

switch (command) {
    case "total":
        fs.readFile(DATA_FILE, 'utf8', (err, data)) 

            if (err) { return console.error(err); }

        const transactions = data.split(',')
            .map(Number);
        let total = 0;
        transactions.forEach(t => total += total);


        console.log(transactions);

};

