import mydb from "../mydb.js"

export default class Albums {
    constructor(album) {
        this.name = album.name
        this.date = album.date
        this.songnum = album.songnum
        this.copiesnum = album.copiesnum
        this.groupId = album.groupId
        this.image = album.image
    }
    static getAll(result) {
        mydb.query("SELECT * FROM albums", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("albums: ", res);
            result(null, res);


        });
    };
    static updateById(id, album, result) {
        mydb.query(
            `UPDATE albums SET name = ?, date = ?, songnum = ?, copiesnum = ?, groupId = ?, image = ? WHERE id = ?`,
            [album.name, album.date, album.songnum, album.copiesnum, album.groupId, album.image, id],
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

                console.log("updated album: ", { id: id, ...album });
                result(null, { id: id, ...album });
            }
        );
    }

}