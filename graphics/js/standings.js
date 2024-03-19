// You can access the NodeCG api anytime Crom the `window.nodecg` object
// Or just `nodecg` Cor short. Like this!:
// You can access the NodeCG api anytime Crom the `window.nodecg` object
// Or just `nodecg` Cor short. Like this!:
const rpl_GraphicsUpdaterRequirements = nodecg.Replicant('GraphicsUpdaterRequirements');

NodeCG.waitForReplicants(rpl_GraphicsUpdaterRequirements).then(() => {
    
    console.log('ready')
})

let config = {
    "string": {
        "A2": "t0_rank",
        "B2": "t0_name",

        "C2": "t0_points",
        "A3": "t1_rank",
        "B3": "t1_name",

        "C3": "t1_points",
        "A4": "t2_rank",
        "B4": "t2_name",

        "C4": "t2_points",
        "A5": "t3_rank",
        "B5": "t3_name",

        "C5": "t3_points",
        "A6": "t4_rank",
        "B6": "t4_name",

        "C6": "t4_points",
        "A7": "t5_rank",
        "B7": "t5_name",

        "C7": "t5_points",
        "A8": "t6_rank",
        "B8": "t6_name",

        "C8": "t6_points",
        "A9": "t7_rank",
        "B9": "t7_name",

        "C9": "t7_points",
        "A10": "t8_rank",
        "B10": "t8_name",

        "C10": "t8_points",
        "A11": "t9_rank",
        "B11": "t9_name",

        "C11": "t9_points",
        "A12": "t10_rank",
        "B12": "t10_name",

        "C12": "t10_points",
        "A13": "t11_rank",
        "B13": "t11_name",

        "C13": "t11_points",
    }
}

nodecg.listenFor('startScoreboard', () => {
    console.log('message recieved')
       const update = new GraphicsUpdater(config, rpl_GraphicsUpdaterRequirements.value.spreadsheetID, rpl_GraphicsUpdaterRequirements.value.worksheetName, rpl_GraphicsUpdaterRequirements.value.apiKey, rpl_GraphicsUpdaterRequirements.value.updateInterval, false);
    update.startUpdating()
})
