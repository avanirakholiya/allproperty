import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {

    const [id, idchange] = useState("");
    const [firstname, namechange] = useState("");
    const [lastname, lastnamechange] = useState("");
    const [email, emailchange] = useState("");
    const [mobileno, phonechange] = useState("");
    const [gender, genderchange] = useState("");
    const [city, citychange] = useState("");
    const [birthdate, birthdatechange] = useState("");
    const [hobbies, hobbieschange] = useState([]);
    const [file, filechange] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { firstname, lastname, email, mobileno, gender, city, birthdate, hobbies, file, active };


        fetch("https://retoolapi.dev/uwJu1R/employee/", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID:</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>FirstName:</label>
                                            <input required value={firstname} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                            {firstname.length == 0 && validation && <span className="text-danger">Enter the firstname</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>LastName:</label>
                                            <input required value={lastname} onMouseDown={e => valchange(true)} onChange={e => lastnamechange(e.target.value)} className="form-control"></input>
                                            {lastname.length == 0 && validation && <span className="text-danger">Enter the lastname</span>}
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email:</label>
                                            <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                            {email.length == 0 && validation && <span className="text-danger">Enter email Address</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Mobileno:</label>
                                            <input value={mobileno} maxLength="10" onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                            {mobileno.length == 0 && validation && <span className="text-danger">Enter Mobileno </span>}
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Gender:</label><br />
                                            male<input type="radio" value={"male"} name="gender" onChange={e => genderchange(e.target.value)}></input>
                                            female<input type="radio" value={"female"} name="gender" onChange={e => genderchange(e.target.value)}></input>
                                            {gender.length == 0 && validation && <span className="text-danger">select any one </span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>City:</label><br />
                                            <select onChange={e => citychange(e.target.value)} >
                                                <option value="">Select</option>
                                                <option value="rajkot">Rajkot</option>
                                                <option value="ahmedabad">Ahmedabad</option>
                                                <option value="junagadh">Junagadh</option>
                                                <option value="surat">Surat</option>
                                            </select>
                                            {city.length == 0 && validation && <span className="text-danger">select any one option </span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Birthdate:</label>
                                            <input value={birthdate} onChange={e => birthdatechange(e.target.value)} className="form-control"></input>
                                            {city.length == 0 && validation && <span className="text-danger">Enter Birthdate</span>}

                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Hobbies:</label><br />
                                           <input type="checkbox" value="Music" name="checkbox1" onChange={e => {
                                                if (e.target.checked) {
                                                    hobbieschange([...hobbies, e.target.value]);
                                                } else {
                                                    hobbieschange(hobbies.filter(hobby => hobby !== e.target.value));
                                                }
                                            }}></input> Music
                                            <input type="checkbox" value="Reading" name="checkbox" onChange={e => {
                                                if (e.target.checked) {
                                                    hobbieschange([...hobbies, e.target.value]);
                                                } else {
                                                    hobbieschange(hobbies.filter(hobby => hobby !== e.target.value));
                                                }
                                            }}></input>Reading
                                            <input type="checkbox" value="travelling" name="checkbox2" onChange={e => {
                                                if (e.target.checked) {
                                                    hobbieschange([...hobbies, e.target.value]);
                                                } else {
                                                    hobbieschange(hobbies.filter(hobby => hobby !== e.target.value));
                                                }
                                            }}></input>Travelling
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label></label>
                                            <input type="file" name="file" onChange={e => filechange(e.target.value)}></input>
                                            {file.length==0 && validation && <span className="text-danger">select any one file </span>}

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Is Active</label>

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default EmpCreate;