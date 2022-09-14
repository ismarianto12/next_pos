
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import * as Icon from 'react-feather'
import DataTable from 'react-data-table-component';
import { render } from 'react-dom';


export const Listmodal = ({
    show,
    closereq,
    handlesubmit,
    handlechange,
    values,
}) => {

    console.log(values)

    return (<>
        <Modal
            show={show}
            onHide={closereq}
            dialogClassName="modal-90w"
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title><Icon.Airplay /> Master Data Barang</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Kode Barang</Form.Label>
                        <Form.Control type="text" name="kode" placeholder="Masukan Kode barang" onChange={(e) => handlechange(e)} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nama Barang</Form.Label>
                        <Form.Control type="text" name="nama" placeholder="Masukan Nama barang" onChange={(e) => handlechange(e)} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Harga Beli</Form.Label>
                        <Form.Control type="text" name="hargabeli" placeholder="Harga Beli" onChange={(e) => handlechange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Harga Jual</Form.Label>
                        <Form.Control type="text" name="hargajual" placeholder="Harga Beli" onChange={(e) => handlechange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Stok</Form.Label>
                        <Form.Control type="number" name="stok" placeholder="Harga Beli" onChange={(e) => handlechange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={closereq}>
                    <Icon.ArrowLeft />   Close
                </Button>
                <Button variant="primary" onClick={handlesubmit}>
                    <Icon.Save />    Simpan
                </Button>
            </Modal.Footer>
        </Modal>

    </>)
}


export const Table = () => {

   
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    return (
        <DataTable
            title={(<><Icon.Menu /> Data barang</>)}
            columns={columns}
            data={data}
            pagination
        />
    );

}
