import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const[filterval,setFilterval]=useState('');
    const[searchApiData,setSearchApiData]=useState([]);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("https://retoolapi.dev/uwJu1R/employee/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                getData();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }
    const getData=()=>{
        fetch("https://retoolapi.dev/uwJu1R/employee/").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
            setSearchApiData(resp);
        }).catch((err) => {
            console.log(err.message);
        })

    }

    useEffect(() => {
        getData();
    }, [])
    const handleFilter=(e)=>{
        if(e.target.value == ''){
            empdatachange(searchApiData)
        }else{
        const filterResult=  searchApiData.filter(empdata=>empdata.firstname.toLowerCase().includes(e.target.value.toLowerCase())||empdata.lastname.toLowerCase().includes(e.target.value.toLowerCase()))
        empdatachange(filterResult)
        }
        setFilterval(e.target.value)
        }
    
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                <div>
                <Link to="employee/create" className="btn btn-success" style={{float:"left"}}>Add New (+)</Link>
      <div style={{margin:"10px 5%",float:"right"}}>
      <input placeholder="search" value={filterval} onInput={(e)=>handleFilter(e)}/>
      </div>
      </div>
                
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>FirstName</td>
                                <td>LastName</td>
                                <td>Email</td>
                                <td>Mobile</td>
                                <td>gender</td>
                                <td>City</td>
                                <td>Birthdate</td>
                                <td>Hobbies</td>
                                <td>File</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobileno}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.city}</td>
                                        <td>{item.birthdate}</td>
                                        <td>{item.hobbies}</td>
                                        <td>{item.file}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;