import axios from "axios"
import { useCallback, useEffect, useMemo, useState } from "react"
import "./UserData.css"
import { Header } from "../Components/Header"

export const UserData = () => {
    let [users, setUsers] = useState([])
    let [search, setSearch] = useState('')

    useEffect(() => {
        async function userApi() {
            let { data } = await axios.get('https://dummyjson.com/users')
            console.log(data)
            setUsers(data.users)
        }
        userApi()
    }, [])


    // let filterData = useMemo(() => {
    //     return users.filter(person => person.firstName.toLowerCase().includes(search.toLocaleLowerCase()))
    // }, [users, search])



    let filterData = useMemo(() => {
        return users.filter(person =>
            `${person.firstName} ${person.lastName}`
                .toLowerCase()
                .includes(search.toLowerCase())
        )
    }, [users, search])





    let handlechange = useCallback((e) => {
        setSearch(e.target.value)
    }, [])

    let [editData, setEditData] = useState({
        name: '',
        email: '',
    })

    let editFunction = useCallback((e) => {
        setEditData({
            name: e.firstName,
            email: e.email,
        })
    }, [])


    let deleteUser = useCallback(
        async (e) => {
            let a = await axios.delete(`https://dummyjson.com/users/${e}`)
            return setUsers(prev => prev.filter(i => i.id !== e))
        }, [users]
    )

    return (
        <>
            <Header />
            <div className="user-data-page">
                <div className="user-data-topbar">
                    <div className="user-data-title">
                        <h2>User Details</h2>
                    </div>
                    <div className="search-container">
                        <input
                            type="search"
                            className="search-input"
                            value={search}
                            onChange={handlechange}
                            placeholder="search user.." />
                    </div>
                </div>

                <div className="table-card">
                    <div className="table-responsive">
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterData.map((u) => (
                                        <tr key={u.id}>
                                            <td className="user-id">#{u.id}</td>
                                            <td>{u.firstName} {u.lastName}</td>
                                            <td>{u.email}</td>
                                            <td>{u.age}</td>
                                            <td>
                                                <span className={`badge-gender ${(u.gender || '').toLowerCase()}`}>
                                                    {u.gender}
                                                </span>
                                            </td>
                                            <td>
                                                <button className="btn-edit"
                                                    type="button"
                                                    data-bs-toggle="offcanvas"
                                                    onClick={() => editFunction(u)}
                                                    data-bs-target="#offcanvasRight"
                                                    aria-controls="offcanvasRight"
                                                >Edit</button>
                                            </td>
                                            <td>
                                                <button className="btn-delete" onClick={() => deleteUser(u.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>


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
                        <label  className="form-label">
                            Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={editData.name}
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
                            value={editData.email}
                            className="form-control"
                        />
                    </div>
                    <button type="button" className="save-btn">
                        Save Changes
                    </button>

                </div>
            </div>
        </>
    )
}