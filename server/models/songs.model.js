import mydb from "../mydb.js"

export default class Songs {
    constructor(song) {
        this.name = song.name
        this.albumId = song.albumId
    }
    static getAll(result) {
        mydb.query("SELECT * FROM songs", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("songs: ", res);
            result(null, res);


        });
    };
    static updateById(id, song, result) {
        mydb.query(
            `UPDATE songs SET name = ?, albumId = ? WHERE id = ?`,
            [song.name, song.albumId, id],
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

                console.log("updated song: ", { id: id, ...song });
                result(null, { id: id, ...song });
            }
        );
    }
    static createItem = (item, result) => {
        mydb.query("INSERT INTO songs SET name = ?, albumId =?",
            [item.name, item.albumId],
            (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                    return;
                }

                console.log("created song: ", { id: res.insertId, ...item });
                result(null, { id: res.insertId, ...item });
            });
    };
    static remove = (id, result) => {
        mydb.query("DELETE FROM songs WHERE id = ?", id, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("deleted song with id: ", id);
            result(null, res);
        });
    };
}