import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
    const { empid } = useParams();

    //const [empdata, empdatachange] = useState({});


    useEffect(() => {
        fetch("https://retoolapi.dev/uwJu1R/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            hobbieschange(resp.hobbies);
            namechange(resp.firstname);
            lastnamechange(resp.lastname);
            emailchange(resp.email);
            phonechange(resp.mobileno);
            genderchange(resp.gender);
            citychange(resp.city);
            birthdatechange(resp.birthdate);
            filechange(resp.file);
            activechange(resp.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

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
        const empdata = { id,  firstname, lastname, email, mobileno, gender, city, birthdate, hobbies,file,active };


        fetch("https://retoolapi.dev/uwJu1R/employee/" + empid, {
            method: "PUT",
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
                                <h2>Employee Edit</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID:</label>
                                            <input value={id} disabled className="form-control"></input>
                                        </div>
                                    </div>
                                   

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>FirstName:</label>
                                            <input required value={firstname} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                            {firstname.length == 0 && validation && <span className="text-danger">Enter the first name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>LastName:</label>
                                            <input required value={lastname} onMouseDown={e => valchange(true)} onChange={e => lastnamechange(e.target.value)} className="form-control"></input>
                                            {lastname.length == 0 && validation && <span className="text-danger">Enter the last name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email:</label>
                                            <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Mobileno:</label>
                                            <input value={mobileno} maxLength="10" onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                        <label>Gender:</label>
                                            <input type="radio" value={"male"} name="gender"
                                                label={`male`} checked={gender === "male"}
                                                onChange={(e) => genderchange(e.target.value)}
                                            />male

                                            <input type="radio" value={"female"} name="gender" label={`female`} checked={gender === "female"}onChange={(e) => genderchange(e.target.value)}
                                            />female
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>City:</label><br />
                                            <select value={city} onChange={e => citychange(e.target.value)} >
                                                <option value="">Select</option>
                                                <option value="rajkot">Rajkot</option>
                                                <option value="ahmedabad">Ahmedabad</option>
                                                <option value="junagadh">Junagadh</option>
                                                <option value="surat">Surat</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Birthdate:</label>
                                            <input required value={birthdate} onMouseDown={e => valchange(true)} onChange={e => birthdatechange(e.target.value)} className="form-control"></input>
                                            {birthdate.length == 0 && validation && <span className="text-danger">Enter the birthdate</span>}
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                        <label>Hobbies:</label><br />
              <input type="checkbox" value="music" name="checkbox1" onChange={e => {
                if (e.target.checked) {
                    hobbieschange([...hobbies, e.target.value]);
                } else {
                    hobbieschange(hobbies.filter(hobby => hobby !== e.target.value));
                }
              }} checked={hobbies.includes("music")} />music

              <input type="checkbox" value="reading" name="checkbox" onChange={e => {
                if (e.target.checked) {
                    hobbieschange([...hobbies, e.target.value]);
                } else {
                    hobbieschange(hobbies.filter(hobby => hobby !== e.target.value));
                }
              }} checked={hobbies.includes("reading")} />reading
              <input type="checkbox" value="travelling" name="checkbox2" onChange={e => {
                if (e.target.checked) {
                    hobbieschange([...hobbies, e.target.value]);
                } else {
                    hobbieschange(hobbies.filter(hobby => hobby !== e.target.value));
                }
              }} checked={hobbies.includes("travelling")} />travelling



                                        </div>
                                    </div>





                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label></label>
                                            <input type="file" name="file" onChange={e => filechange(e.target.value)}></input>
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

export default EmpEdit;