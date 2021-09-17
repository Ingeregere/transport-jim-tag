import React, {useEffect, useState} from 'react';
import './style.css'
import {Alert, Badge, Form} from 'react-bootstrap';
import AllServices from "./GererVehiculeServices";
import {Link, useHistory, useParams} from "react-router-dom";



const Index= () => {
    const [transports, setTransports] = useState([])
    const [transport, setTransport] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const history = useHistory()
    const {id} = useParams()

    useEffect(()=>{
        getAllTransports()
    },[])
    const getAllTransports = () =>{
        AllServices.getAllTransports().then((response) =>{
            setTransports(response.data)
        })
    }

    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> Voir tous les véhicules </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/vehicules/attribuer_vehicules'}>
                            <button type="button" className="btn btn-primary btn-fw">Nouvelle attribution</button>
                        </Link>
                    </ol>
                </nav>
            </div>
            <div className="row maintable">

                <div className="col-lg-12 grid-margin stretch-card ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tous les Véhicules</h4>

                            <div className="table-responsive ">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr className={'text-center'}>
                                        <th >N<sup>o</sup></th>
                                        <th >Carrosserie</th>
                                        <th >Boite de vitesse</th>
                                        <th >Marque</th>
                                        <th >Categorie</th>
                                        <th >Pays</th>
                                        <th >date d'enregistrement</th>
                                        <th >image transp</th>
                                        <th >km</th>
                                        <th >Modèle</th>
                                        <th >Pav</th>
                                        <th >Power</th>
                                        <th >Ptc</th>
                                        <th >Ptr</th>
                                        <th >Suspension</th>
                                        <th >Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        transports.map((b,index) =>(
                                            <tr key={b.id} className={'text-center'}>
                                                <td >{index+1}</td>
                                                <td>{b.bodywork}</td>
                                                <td>{b.box}</td>
                                                <td>{b.brand}</td>
                                                <td>{b.category}</td>
                                                <td>{b.country}</td>
                                                <td>{b.dateRegistration}</td>
                                                <td>{b.imageTransport}</td>
                                                <td>{b.kilometer}</td>
                                                <td>{b.model}</td>
                                                <td>{b.pav}</td>
                                                <td>{b.power}</td>
                                                <td>{b.ptc}</td>
                                                <td>{b.ptr}</td>
                                                <td>{b.suspension}</td>
                                                <td>{b.status}</td>

                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Index
