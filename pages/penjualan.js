import Head from "next/head"  
import Cpenjualan from "../components/penjualan";
import { useState } from "react"; 
import Templates from "../components/layouts/templates";


const Penjualan = () => {
    const [show, setShow] = useState(false)

    const [barang, setBarang] = useState([])
    const databarang = [];


    return (<Templates container={
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Cpenjualan />
        </>

    } />)
}

export default Penjualan