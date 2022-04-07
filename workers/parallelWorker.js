const ZB = require('zeebe-node')
const PDFDocument = require('pdfkit');
const fs = require('fs');
const {Duration} = require("zeebe-node");

//https://medium.com/@sitapati/node-js-client-for-zeebe-microservices-orchestration-engine-72287e4c7d94

const zbc = new ZB.ZBClient()

const zbWorker = zbc.createWorker('parallel-task', handler);

function handler(job, _, zbWorker) {
    let waitTime = job.variables.time;
     setTimeout(() => {
        console.log('Task finished after waiting for: ' + waitTime + ' seconds')
    }, waitTime * 1000);

   // const updateToBrokerVariables = {
    //    test: 'valueTest',
  //  }

    return job.complete();
}


const zbWorkerPost = zbc.createWorker({
    taskType: 'post-parallel-task',
    taskHandler: parallelHandler
});

function parallelHandler(job, _, zbWorkerPost) {

    console.log('Post parallel tasks task');
    // console.log(job.variables);
    return job.complete();
}