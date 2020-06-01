const Project = require('../models/project');

const project = new Project({
    name: "",
    id: "_bfs6iyh02",
    type: "",
    theme: "",
    starttime: "",
    endtime: "",
    datafile: "../rawdata/dung@infore.vn/comments-1589440578847.txt",
    priority: "",
    upload_time: "",
    owner_id: ""
})

project.importRawFileToTable()
.then(console.log)