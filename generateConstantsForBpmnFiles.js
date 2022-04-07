const ZB = require('zeebe-node');

generateConstantsForBpmnFiles();

async function generateConstantsForBpmnFiles() {
    let resp = await ZB.BpmnParser.generateConstantsForBpmnFiles('./demo.bpmn');
    console.log(resp);
}