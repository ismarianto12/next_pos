import React, { useEffect } from 'react'
import Head from "next/head"
import Templates from '../components/layouts/templates'
import Card from 'react-bootstrap/Card'
import Chart from 'chart.js/auto'
import * as Icon from 'react-feather'

const Dashboard = () => {

    useEffect(() => {

        const ctx = document.getElementById('myChart').getContext('2d')
        const crt = document.getElementById('Bar').getContext('2d')

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const jk = new Chart(crt, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });


        return () => {
            myChart.destroy()
            jk.destroy()

        }
    });

    return (<Templates container={
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="row" style={{ 'background': '#fff', 'margin-top': '12px' }}>
                <br /> <br />
                <div className="col-md-6">
                    <br /> <br />
                    <h4><Icon.List /> Statistik Penjualan</h4>
                    <canvas id="myChart" width="auto" height="155"></canvas>

                </div>
                <div className="col-md-6">
                    <br /> <br />
                    <h4><Icon.BarChart2 /> Barang Dan stok</h4>

                    <canvas id="Bar" width="auto" height="140"></canvas>

                </div>

                <h4><Icon.List /> Statistik Penjualan</h4>
                <br /> <br />
                <div className='clearfix'></div>
                {[
                    'Primary',
                    'Secondary',
                    'Success',
                    'Danger',
                    'Warning',
                    'Info',

                ].map((variant) => (
                    <div className="col-md-4">
                        <Card
                            bg={variant.toLowerCase()}
                            key={variant}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '18rem' }}
                            className="mb-3"
                        >
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>{variant} Card Title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}

            </div>
        </div>

    } />)
}

export default Dashboard