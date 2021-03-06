import React, {useEffect, useState} from 'react';
import '../vehicules/marques/style.css'
import {Alert, Badge, Form} from 'react-bootstrap';
import AllServices from "./DashboardService";
import {Link, useHistory, useParams} from "react-router-dom";



const Index= () => {
    const [contacts, setContacts] = useState([])
    const [contact, setContact] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const history = useHistory()
    const {id} = useParams()

    useEffect(()=>{
        getAllContact()
    },[])

    const getAllContact = () =>{
        AllServices.getAllContactByCreatedAt().then((response) =>{
            setContacts(response.data)
        })
    }



    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> {id? "Editer": "Ajouter"} un Contact </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/contacts/clients'}>
                            <button type="button" className="btn btn-primary btn-fw">Retour</button>
                        </Link>
                    </ol>
                </nav>
            </div>
            <div className="row maintable">

                <div className="col-lg-12 grid-margin stretch-card ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tous les Contacts</h4>

                            <div className="table-responsive ">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr className={'text-center'}>
                                        <th >N<sup>o</sup></th>
                                        <th >Marque</th>
                                        <th >Catégorie</th>
                                        <th >Date de création</th>
                                        <th >Email</th>
                                        <th >Nom</th>
                                        <th >Prénom</th>
                                        <th >Message</th>
                                        <th >Mobile</th>
                                        <th >Modèle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        contacts.map((b,index) =>(
                                            <tr key={b.id} className={'text-center'}>
                                                <td >{index+1}</td>
                                                <td>{b.brandTransport}</td>
                                                <td>{b.categoryTransport}</td>
                                                <td>{b.createdAt}</td>
                                                <td>{b.email}</td>
                                                <td>{b.firstName}</td>
                                                <td>{b.lastName}</td>
                                                <td>{b.message}</td>
                                                <td>{b.mobile}</td>
                                                <td>{b.modelTransport}</td>
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
