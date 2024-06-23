

const getAllJobs = async (req, res) =>{
    res.send("Alljobs");
}

const getJob = async (req, res) =>{
    res.send("Job by id");
}

const createJob = async (req, res) =>{
    res.send("create Job");
}

const updateJob = async (req, res) =>{
    res.send("update job by id");
}

const deleteJob = async (req, res) =>{
    res.send("delete Job by id");
}


module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}