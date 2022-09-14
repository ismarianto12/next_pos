import React, { useState } from "react"
import Head from "next/head"
import Template from "../components/template/template"
import { Formreturn, Table } from "../components/return"
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-feather'
import Templates from "../components/layouts/templates"


const Return = () => {
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
            <Head>
                <title>Data Master Return</title>
            </Head>
            <Button className='btn btn-info btn-sm float-left' variant="primary" onClick={() =>
                setShow(true)

            } style={{
                'float': 'right',
                'color': '#fff',
                'margin-bottom': '15px'
            }}>
                <Icon.Plus /> Tambah
            </Button>
            <br />
            <Formreturn show={show} handleClose={handleClose} action={action} />

            <Table />
        </div>

    } />)
}

export default Return