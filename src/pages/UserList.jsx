import { useCallback, useEffect, useMemo, useState } from "react"
import { Header } from "../Components/Header"
import axios from "axios"
import './UserList.css'

export const UserList = () => {
    let [user, setUsers] = useState([])
    let [search, setSearch] = useState('')
    let [editUser, setEditUser] = useState({
        name:'',
        email:'',
    })

    useEffect(() => {
        async function userApi() {
            let { data } = await axios.get('https://dummyjson.com/users')
            console.log(data)
            setUsers(data.users)
        }
        userApi()
    }, [])

    let editUserData = useCallback((e)=>{
        setEditUser({
            name: e.firstName,
            email: e.email,
        })
    })



    let filterData = useMemo(() => {
        return user.filter(user => user.firstName.toLowerCase().includes(search))
    }, [user, search])

    let handleChange = useCallback((e) => {
        setSearch(e.target.value)
    }, [])


    let deleteUser = useCallback(async (e) => {
        await axios.delete(`https://dummyjson.com/users/${e}`)
        return setUsers(prev => prev.filter(person => person.id !== e))
    }, [user])


    return (
        <>
            <Header />
            <div className="container my-5">
                <div className="row my-3">
                    <div className="col-5"><input type="text" onChange={handleChange} className="form-control" /></div>
                </div>
                <div className="row">
                    <table className="table table-dark table-hover table-striped">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>First Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filterData.map((e) => (
                                    <tr key={e.id}>
                                        <td>{e.id}</td>
                                        <td>{e.firstName}</td>
                                        <td>{e.email}</td>
                                        <td>{e.gender}</td>
                                        <td>{e.age}</td>
                                        <td> <button className=" btn btn-primary"
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            onClick={()=>editUserData(e)}
                                            data-bs-target="#offcanvasRight"
                                            aria-controls="offcanvasRight"
                                        >Edit</button></td>





                                        <td> <button className="btn btn-danger" onClick={() => deleteUser(e.id)}>Delete</button></td>
                                    </tr>

                                ))
                            }

                        </tbody>
                        
                    </table>
                                                <div
                                className="offcanvas offcanvas-end"
                                tabIndex="-1"
                                id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel"
                            >
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasRightLabel">
                                        User Details
                                    </h5>

                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    ></button>
                                </div>

                                <div className="offcanvas-body">

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Name
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            value={editUser.name}
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">
                                            Email
                                        </label>

                                        <input
                                            type="text"
                                            name="email"
                                            value={editUser.email}
                                            className="form-control"
                                        />
                                    </div>
                                    <button type="button"
                                        data-bs-dismiss='offcanvas'
                                        aria-label="Close"
                                        className=" btn btn-success">
                                        Save Changes
                                    </button>

                                </div>
                            </div>
                </div>
            </div>
        </>
    )
}