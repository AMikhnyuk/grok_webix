import mydb from "../mydb.js"

export default class Members {
    constructor(member) {
        this.name = member.name
        this.role = member.role
        this.date = member.date
        this.country = member.country
        this.awards = member.awards
    }
    static getAll(result) {
        mydb.query("SELECT * FROM members", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("members: ", res);
            result(null, res);


        });
    };
    static updateById(id, member, result) {
        mydb.query(
            `UPDATE members SET name = ?, role = ?, date = ?, country = ?, awards = ? WHERE id = ?`,
            [member.name, member.role, member.date, member.country, member.awards, id],
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

                console.log("updated group: ", { id: id, ...member });
                result(null, { id: id, ...member });
            }
        );
    }
}