const Task = require('../modules/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasksList = await Task.find();
        return res.render('index', {tasksList});
    } catch (err) {
        response.status(500).send({error: err.message});
    } 
};

const createTask = async (req, res) => {
    const task = req.body;

    if(!task.task) {
        return res.redirect('/');
    }

    try {
        await Task.create(task)
        return res.redirect('/')
    } catch (err) {
        response.status(500).send({error: err.message});
    };
}

module.exports = {
    getAllTasks,
    createTask
};