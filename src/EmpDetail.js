import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});
    const getData = () => {
        fetch("https://retoolapi.dev/uwJu1R/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

            <div className="container">

                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title">
                        <h2 align="center">Employee Details</h2>
                    </div>
                    <div className="card-body"></div>

                    {empdata &&
                        <div>

                            <div style={{ width: "99%", height: "120px", border: "1px", boxShadow: "0px 0px 9px red", paddingTop: "15px" }}>
                                <h4 style={{ textDecoration: "underline", textShadow: "0 0 3px #FF0000", paddingLeft: "300px" }}>Personal Details :</h4>
                                <div style={{ paddingLeft: "500px" }}>
                                    <h4>Employee id : ({empdata.id}) <br />Employee name :<b>{empdata.firstname}</b> <b>{empdata.lastname}</b> </h4>
                                </div>
                            </div><br />
                            <div style={{ width: "99%", height: "115px", border: "1px", boxShadow: "0px 0px 9px red", paddingTop: "15px"}}>
                                <h4 style={{ textDecoration: "underline", textShadow: "0 0 3px #FF0000", paddingLeft: "300px" }}>Contact Details :</h4>
                                <div style={{ paddingLeft: "500px" }}>
                                    <h5>Email is : {empdata.email}</h5>
                                    <h5>Phone is : {empdata.mobileno}</h5>
                                </div>
                            </div><br />
                            <div style={{ width: "99%", height: "180px", border: "1px", boxShadow: "0px 0px 9px red", paddingTop: "15px" }}>
                                <h4 style={{ textDecoration: "underline", textShadow: "0 0 3px #FF0000", paddingLeft: "300px" }}>Others Details :</h4>
                                <div style={{ paddingLeft: "500px" }}>
                                    <h6>gender is : {empdata.gender}</h6>
                                    <h6>City is : {empdata.city}</h6>
                                    <h6>Birthdate is : {empdata.birthdate}</h6>
                                    <h6>Hobbies is : {empdata.hobbies}</h6>
                                    <h6>File is : {empdata.file}</h6>
                                </div>
                            </div>
                            <Link className="btn btn-danger" to="/">Back to Listing</Link>
                        </div>
                    }
                </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default EmpDetail;