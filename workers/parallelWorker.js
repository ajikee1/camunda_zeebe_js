const ZB = require('zeebe-node')
const {Duration} = require("zeebe-node");

//https://medium.com/@sitapati/node-js-client-for-zeebe-microservices-orchestration-engine-72287e4c7d94

runParallelTasks();

function runParallelTasks() {

    const zbc = new ZB.ZBClient()
    const zbWorker = zbc.createWorker('parallel-task', handler);

    zbc.createWorker({taskType: 'post-parallel-task', taskHandler: parallelHandler});

}


async function handler(job, _, worker) {
    let waitTime = job.variables.time;
    setTimeout(() => {
        console.log('Task finished after waiting for: ' + waitTime + ' seconds')
    }, waitTime * 1000);

    return job.complete();
}


async function parallelHandler(job, _, worker) {
    console.log('Post parallel tasks task')
    return job.complete();
}