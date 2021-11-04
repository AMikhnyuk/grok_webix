import mydb from "../mydb.js"

export default class Groups {
    constructor(group) {
        this.name = group.name
        this.composition = group.composition
        this.style = group.style
        this.date = group.date
        this.country = group.countries
    }
    static getAll(result) {
        mydb.query("SELECT * FROM groups", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("groups: ", res);
            result(null, res);


        });
    };
    static updateById(id, group, result) {
        mydb.query(
            `UPDATE groups SET name = ?, composition = ?, style = ?, date = ?, country = ? WHERE id = ?`,
            [group.name, group.composition, group.style, group.date, group.country, id],
            (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                    return;
                }

                if (res.affectedRows == 0) {
                    result({ kind: "not_found" }, null);
                    return;
                }

                console.log("updated group: ", { id: id, ...group });
                result(null, { id: id, ...group });
            }
        );
    }
}