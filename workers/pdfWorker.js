const ZB = require('zeebe-node')
const PDFDocument = require('pdfkit');
const fs = require('fs');

//https://medium.com/@sitapati/node-js-client-for-zeebe-microservices-orchestration-engine-72287e4c7d94

const zbc = new ZB.ZBClient()

const zbWorker = zbc.createWorker('pdf-output', handler);

function handler(job, _, worker) {
    console.log("Working");

    const doc = new PDFDocument();

    doc.text('Hello TISTA', 100, 100);

    doc.end();
    //worker.log('Task variables', job.variables)

    // Task worker business logic goes here
    // const updateToBrokerVariables = {updatedProperty: 'newValue',}

    doc.pipe(fs.createWriteStream('./output/helloTista.pdf'));
    return job.complete();
}