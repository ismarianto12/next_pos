import React, { useState } from "react"
import Head from "next/head"
import Template from "../components/template/template"
import { Formjenis, Table } from "../components/jenis"
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-feather'
import Templates from "../components/layouts/templates"

const Kategori = () => {
    const [show, setShow] = useState(false)
    const [action, setAction] = useState('add')
    const handleClose = () => {
        setShow(false)
    }
    return (<Templates container={
        <div style={{
            'height': 'calc(101vh - 10px)',
            'overflow-y': 'hidden',
            'margin-top': '15px'
        }}>
            <Button className='btn btn-info btn-sm float-left' variant="primary" onClick={() =>
                setShow(true)

            } style={{
                'margin-bottom': '10px',
                'float': 'right',
                'color': '#fff'
            }}>
                <Icon.Plus /> Tambah Kategori
            </Button>


            <Formjenis show={show} handleClose={handleClose} action={action} style={{
                'margin-top': '12px'
            }} />

            <Table />
        </div>

    } />)
}

export default Kategori