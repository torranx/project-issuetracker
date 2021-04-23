const Issue = require('./issue.model')

module.exports = function (app) {

    app.get('/search', (req, res) => {
        let project = req.query.project;
        project.toLowerCase().trim();
        Issue.find({
            project: project
        })
            .select('-__v')
            .exec((err, doc) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send(doc)
                }
            })
    })

    app.route('/api/issues/:project')

        .get((req, res) => {
            let project = req.params.project;
            

            Issue.find(
                !req.query.open
                ? {
                    project: project
                }
                : {
                    open: req.query.open
                })
                .select('-__v -project')
                .exec((err, data) => {
                    if (err) {
                        console.log(err)
                    }
                    res.json(data)
                }
            )
        })
        
        .post((req, res) => {
            let { project, issue_title, issue_text, created_by, assigned_to, status_text, confirm } = req.body;
            const newIssue = new Issue({
                issue_title: issue_title,
                issue_text: issue_text,
                created_on: new Date(),
                updated_on: new Date(),
                created_by: created_by,
                assigned_to: assigned_to,
                status_text: status_text,
                project: project
            });

            Issue.find({
                project: project
            }, (err, doc) => {
                if (err) {
                    console.log(err)
                } else if (confirm) { //true only if form is once submitted
                    newIssue.save((err, data) => {
                        if (err) {
                            if (err.name == 'ValidationError') {
                                return res.send(Object.values(err.errors).map(val => val.message))
                            }
                        } else {
                            return res.send("New issue added!")
                        }
                    })
                } else if (doc.length) {
                    return res.send(`Project name already exists. Do you want to add issue on ${project}?`)
                } else {
                    newIssue.save((err, data) => {
                        if (err) {
                            if (err.name == 'ValidationError') {
                                return res.send(Object.values(err.errors).map(val => val.message))
                            }
                        } else {
                            return res.send("New issue added!")
                        }
                    })
                }
            })
        })
        
        .put(function (req, res){
            let id = req.query.id;
            let updates = {};
            for (const [key, value] of Object.entries(req.body)) {
                if (value != '') {
                    updates[key] = value
                }
            };
            updates['updated_on'] = new Date();
            
            Issue.findByIdAndUpdate(id, updates, { new: true }, (error, data) => {
                if (data) {
                    return res.send(data);
                } else {
                    return res.json({ error: 'could not update', '_id': updates._id });
                }
            });
        })
        
        .delete(function (req, res){
            if (!req.body._id) {
                return res.json({ error: 'missing _id'})
            } //Transfer to user auth
            Issue.findByIdAndDelete(req.body._id, (err, data) => {
                if (data) {
                    return res.json({ result: 'successfully deleted', '_id': req.body._id})
                } else {
                    return res.json({error: 'could not delete', '_id': req.body._id})
                }
            })
        });
};
