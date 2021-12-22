import React from "react";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { BsFillGearFill } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";
import Avatar from 'react-avatar';
import './UserTable.css';
// import Pagination from "./Pagination";

const UsersTable = (props) => {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(5);

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        try {
            fetch("https://reqres.in/api/users")
                .then(response => response.json()
                    .then(json => {
                        console.log(json.data);
                        setUsers(json.data);
                    }))
        } catch (error) {
            console.log(error)
        }
    }

    // const indexOfLastUser = currentPage * usersPerPage;
    // const indexOfFirstUser = indexOfLastUser - usersPerPage;
    // const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className="table-header">
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="right" >Name</TableCell>
                            <TableCell align="right">Date Created</TableCell>
                            <TableCell align="right">Role</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell to={`/user/${row.id}`} align="right">{row.id}</TableCell>
                                <TableCell to={`/user/${row.id}`} align="right" >
                                    <Avatar src={row.avatar} /> {row.first_name} {row.last_name}
                                </TableCell>
                                <TableCell align="right">21/12/2021</TableCell>
                                <TableCell align="right">Admin</TableCell>
                                <TableCell align="right">Active</TableCell>
                                <TableCell align="right"><BsFillGearFill /><RiCloseCircleFill /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* <Pagination usersPerPage={usersPerPage} totalUsers={users.length} /> */}

        </div>
    );
}

export default UsersTable