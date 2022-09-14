import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Listmodal, Table } from '../components/list'
import Template from '../components/template/template'
import * as Icon from 'react-feather'
import Head from 'next/head'
import Templates from '../components/layouts/templates'
import styled from 'styled-components'

const Barang = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)
    const [value, setValue] = useState({
        kode: '',
        nama: '',
        hargabeli: '',
        hargajual: '',
        stok: ''
    })
    const Container = styled.div`margin-top: 10px;`;

    const requestClose = () => {
        setShow(false)
    }

    const handlechange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,

        })
    }
    const handlesubmit = (event) => {
        event.preventDefault()
    }
    return (

        <Templates container={<>
            <div style={{
                'height': 'calc(101vh - 10px)',
                'overflow-y': 'hidden',
                'margin-top': '15px'
            }}>
                <Container>
                    <Button className='btn btn-info btn-sm float-left' variant="primary" onClick={() => setShow(true)} style={{
                        'float': 'right',
                        'color': '#fff',
                        'margin-bottom': '12px'
                    }}>
                        <Icon.Plus /> Tambah data Barang
                    </Button>

                </Container>
                <Table />
                <Listmodal
                    show={show}
                    closereq={requestClose}
                    handlesubmit={handlesubmit}
                    handlechange={handlechange}
                    {...value}
                    error={error}
                    values={value}
                />
            </div>
        </>} />
    )
}



export default Barang