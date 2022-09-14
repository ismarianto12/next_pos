import DataTable from "react-data-table-component"
import * as Icon from 'react-feather'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';

export const Formreturn = ({
    show,
    handleClose,
    action
}) => {
    return (
        <div>
            <Offcanvas show={show} onHide={handleClose} backdrop="">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><Icon.ArrowDown />{action == 'add' ? 'Tambah Data' : 'Edit Data'}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Kode Jenis</Form.Label>
                            <Form.Control type="text" name="kode" placeholder="Masukan Kode barang" />
                            <Form.Text className="text-muted">
                                * ) wajib di isi
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Jenis</Form.Label>
                            <Form.Control type="text" name="nama" placeholder="Masukan Nama barang" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Button className='btn btn-info btn-sm float-left' variant="primary">
                                <Icon.Plus /> Tambah jenis
                            </Button>
                        </Form.Group>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}


const myNewTheme = {
    rows: {
        fontSize: '25px'
    }
}
const Wrapper = styled.div`
  min-width: 600px;
  td{font-size:30px}
`;

export const Table = () => {

    const columns = [
        {
            name: 'Kode',
            selector: row => row.title,
            style: {
                background: "#ddd",
                fontSize: '15px'
            },
        },
        {
            name: 'Nama Barang',
            selector: row => row.year,
            style: {
                background: "orange",
                fontSize: '15px'
            },
        },
        {
            name: 'Jenis Barang',
            selector: row => row.year,
            style: {
                background: "orange",
                fontSize: '15px'
            },
        },
        {
            name: 'Status',
            selector: row => row.year,
            style: {
                background: "orange",
                fontSize: '15px'
            },
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
            title: 'Beetlejuice',
            year: '1988',
        },

    ]

    return (
        <Wrapper>
            <DataTable
                title={(<><Icon.Clipboard /> Return data barang</>)}
                columns={columns}
                data={data}
                pagination
                isFixedSize
                customTheme={myNewTheme}
                onSort={() => console.log('onSort')}
                onSetPage={() => console.log('onSetPage')}
            />
        </Wrapper>
    );

}