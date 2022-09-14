import { Modal, Button } from 'react-bootstrap'
import * as Icon from 'react-feather'

export const cari_barang = ({
    show, hide
}) => {
    return (
        <>
            <Modal
                show={show}
                onHide={hide}
                size="lg"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <Icon.Box /> Data Barang
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table table-striped">
                        <tr>
                            <th>
                                @
                            </th>
                            <th>
                                Nama barang
                            </th>
                            <th>
                                Harga
                            </th> <th>
                                Jenis
                            </th>
                        </tr>
                        <tbody>
                            {
                                barang.map((a) => {

                                    return (<><tr>
                                        <td>
                                            {j + 1}
                                        </td>
                                        <td>
                                            {a.name}
                                        </td>
                                        <td>
                                            {a.price}
                                        </td>
                                        <td>
                                            <button className="btn btn-warning btn-sm" type="reset"><Icon.Plus></Icon.Plus> </button>
                                        </td>
                                    </tr></>)

                                })

                            }
                        </tbody>

                    </table>
                </Modal.Body>
            </Modal>

        </>

    )
}
