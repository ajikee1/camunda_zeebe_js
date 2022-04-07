const ZB = require('zeebe-node');

// https://github.com/camunda-community-hub/zeebe-client-node-js
deployBpmn();

async function createZeebeClient(){
    const zbc = new ZB.ZBClient('localhost:26500');
    // const topology = await zbc.topology();
    // console.log(JSON.stringify(topology, null, 2));

    return zbc;
}

async function deployBpmn(){
    const zeebeClient = await createZeebeClient();
    const depl_response = await zeebeClient.deployProcess('./parallel_join.bpmn');
    console.log(depl_response);

    let bpmnProcessId =  depl_response.processes[0].bpmnProcessId;

    await startInstance(zeebeClient, bpmnProcessId);
}

/* Start a Process Instance */
async function startInstance(zeebeClient, bpmnProcessId){

    const result = await zeebeClient.createProcessInstance(bpmnProcessId);
    console.log(result)
}





