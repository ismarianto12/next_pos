import { mysql } from "../../helpers/db";

export default async function handler(req, res) {

    switch (req.method) {
        case "GET":
            return await getdata(req, res)
            break;
        case "PUT":
            return await update(req, res)
            break;
        case "POST":
            return await insert(req, res)
            break;
        case "DELETE":
            return await destroy(req, res)
            break;

        default:
            break;
    }

    async function getdata(req, res) {
        let result = await mysql.query('select * from barang')
        await mysql.end()
        return res.status(200).json(result)
    }

    async function insert(req, res) {
        let result = await mysql.query('insert into barang set ? ', [
            req.body
        ])
        await mysql.end()
        return res.status(200).json(['data berhasil di simpan'])
    }

    async function update(req, res) {
        let result = await mysql.query(`update barang set kode
        nama = "${req.body.nama}",
        jenis_id = "${req.body.jenis_id}",
        hargajual = "${req.body.hargajual}",
        hargabeli = "${req.body.hargabeli}",
        stok = "${req.body.stok}" where id=${req.body.id}
        `)
        await mysql.end()
        return res.status(200).json(result[0])
    }

    async function destroy(req, res) {
        let result = await mysql.query('delete from barang where id = ? ', req.body.id)
        await mysql.end()
        return res.status(200).json({ 'res': 'data berhasild di hapus' })
    }

}
