import Groups from "../models/groups.model.js";


export default class CommonController {
    constructor(model) {
        this.model = model
    }
    findAll(req, res) {
        this.model.getAll((err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Error"
                });
            else res.send(data);
        })

    }
    update(req, res) {
        if (!req.body) {
            res.status(400).send({
                message: "no request body"
            });

        }
        const id = Object.values(req.params)[0]
        this.model.updateById(
            id,
            new this.model(req.body),
            (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found item with id ${id}.`

                        });
                    } else {
                        res.status(500).send({
                            message: "Error updating item with id " + id
                        });
                    }
                } else res.send(data);
            }
        )
    }
    create(req, res) {
        if (!req.body) {
            res.status(400).send({
                message: "empty request"
            });
        }
        const item = new this.model(req.body);
        this.model.createItem(item, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Customer."
                });
            else res.send(data);
        });
    }
    delete = (req, res) => {
        const id = Object.values(req.params)[0]
        this.model.remove(id, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Customer with id ${id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Could not delete Customer with id " + id
                    });
                }
            } else res.send({ message: `Customer was deleted successfully!` });
        });
    };
}