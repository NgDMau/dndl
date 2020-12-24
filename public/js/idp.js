// import fetch from "node-fetch";

const convertTask = function(task) {
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

    return {
        completions: [],
        predictions: [],
        id: task.id,
        data: {
          image: task.url || "https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/images/nick-owuor-astro-nic-visuals-wDifg5xc9Z4-unsplash.jpg"
        }
      };
};

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
        tp.createdDate = tp.created_date;
      }
    }
  
    return task;
  };

async function initTask(project_id) {
    return await this.getNextTask(project_id);
}

async function submitTask(project_id, result) {
    //import fetch from "node-fetch";
    var postUrl = '/api/data/' + project_id;
    console.log("postUrl: ", postUrl)

    var otherParams = {
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(result),
        method: "POST"
    }

    console.log("data: ", JSON.stringify(result))
    var res = await fetch(postUrl, otherParams);
    //console.log(res.json());
    return res.json();
}

async function getTask(projectID) {
    let getUrl = '/api/data/' + projectID;
    let otherParams = {
        method: "GET"
    }
    let result = await fetch(getUrl, otherParams);
    result = await result.json();
    console.log("result", result);
    return result
}


