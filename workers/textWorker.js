const ZB = require('zeebe-node');
const fs = require('fs');


const zbc = new ZB.ZBClient()

const zbWorker = zbc.createWorker('text-output', handler);

function handler(job, _, worker) {
    console.log(job.processInstanceKey);
    console.log("Working");

    fs.writeFile('./output/helloTista.txt', 'Hello TISTA!', function (err) {
        if (err) return console.log(err);
        console.log('Hello TISTA > helloTista.txt');
    });


   // worker.log('Task variables', job.variables)

    // Task worker business logic goes here
   // const updateToBrokerVariables = {updatedProperty: 'newValue',}

    return job.complete();
}