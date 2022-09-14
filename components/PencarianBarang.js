import { Modal, Button } from 'react-bootstrap'
import * as Icon from 'react-feather'

export const PencarianBarang = ({ show, hide, data }) => {
    return (<>
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
                <table className="table table-bordered table-striped">
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
                    </tr><tbody>

                        {/* {data.map((c, a) => {
                            return (<><tr>
                                <td>

                                </td>
                                <td>
                                    {a.name}
                                </td>
                                <td>
                                    {a.name}
                                </td>
                                <td>
                                    {a.jenis}
                                </td>
                                <td>
                                    <button className="btn btn-warning col-md-4" onClick={() => {
                                    }} type="reset"><Icon.Plus></Icon.Plus> </button>
                                </td>
                            </tr></>)
                        })} */}
                    </tbody>

                </table>

            </Modal.Body>
        </Modal>

    </>)
}

export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data)
    return { props: { data } }

};



