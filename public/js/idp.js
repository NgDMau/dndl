// import fetch from "node-fetch";

async function getNewData(project_id) {
    const URL = "/api/data/" + project_id;
    let response = await fetch(URL);
    try {
        return response.json();
    } catch(e) {
        throw e;
    }
    
}

const _convertTask = function(task) {
    // converts the task from the server format to the format
    // supported by the LS frontend
    if (!task) return;

    if (task.completions) {
        for (let tc of task.completions) {
        tc.pk = tc.id;
        tc.createdAgo = tc.created_ago;
        tc.createdBy = tc.created_username;
        tc.leadTime = tc.lead_time;
        }
    }

    if (task.predictions) {
        for (let tp of task.predictions) {
        tp.pk = tp.pk;
        tp.createdAgo = tp.created_ago;
        tp.createdBy = tp.created_by;
        }
    }

    return task;
};

async function initTask() {
    return await this.submitResult({value: 1});
    var testTask = {
        completions: [],
        predictions: [],
        id: 4,
        data: {
            audio: "audio/audio_example.wav"
            
        }
    }
    return testTask;
}

async function submitResult(result) {
    //import fetch from "node-fetch";
    var postUrl = '/api/data';
    var data = result;

    var otherParams = {
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        method: "POST"
    }

    console.log(JSON.stringify(data))
    var res = await fetch(postUrl, otherParams);
    //console.log(res.json());
    return res.json();
}
