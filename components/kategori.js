import DataTable from "react-data-table-component"
import * as Icon from 'react-feather'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';

export const Formjenis = ({
    show,
    handleClose,
    action
}) => {
    return (
        <>
            <Offcanvas show={show} onHide={handleClose} backdrop="static">
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
                            <Button className='btn btn-danger btn-sm float-left' variant="primary">
                                <Icon.Plus /> Reset jenis
                            </Button>
                        </Form.Group>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
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

const styles = theme => ({
    tablecell: {
        fontSize: '30px',
    },
});

export const Table = () => {

    const columns = [
        {
            name: 'Kode',
            style: {
                background: "#ddd",
                fontSize: '15px'
            },
            selector: row => row.title,

        },
        {
            name: 'Jenis',
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
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    return (
        <Wrapper>
            <br />
            <DataTable
                title={(<><Icon.Menu /> Kategori Barang</>)}
                columns={columns}
                data={data}
                pagination
                isFixedSize
                customTheme={myNewTheme}
                onSort={() => console.log('onSort')}
                onSetPage={() => console.log('onSetPage')}
                className={styles.tablecell}
            />
        </Wrapper>
    );

}