import React, { useEffect, useState } from 'react'
import { Container, Button, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteuserAsync, getuserAsync, getusersAsync } from '../../Services/Action/User-Action'

function ViewUser() {

    const dispatch = useDispatch()
    const { users, isLoading } = useSelector(state => state.UserReducer)
    const [isDelete, setIsDelete] = useState(false)

    const handleClick = () => {

        dispatch(getusersAsync())
    }

    const handleIsEdit = (id) => {

        dispatch(getuserAsync(id))
    }

    const handleDelete = (id) => {

        dispatch(DeleteuserAsync(id))
        setIsDelete(!isDelete)
    }

    useEffect(() => {
        handleClick();
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <div className='bg-info d-flex fs-3'>

                        <Button variant="primary" onClick={() => handleClick()}>ViewData</Button>
                        {
                            isLoading ? <h2>Loading...!</h2> :
                                <table border={2} width="1200">
                                    <tr>
                                        <td> No </td>
                                        <td> Email </td>
                                        <td> Password </td>
                                        <td> Action </td>
                                    </tr>

                                    {
                                        users.map((user) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            {
                                                                user.id
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                user.email
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                user.password
                                                            }
                                                        </td>
                                                        <td>
                                                            <Button variant='primary' onClick={() => handleIsEdit(user.id)}>
                                                                Edit
                                                            </Button>
                                                            ||
                                                            <Button variant='danger' onClick={() => handleDelete(user.id)}>
                                                                Delete
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </table>
                        }

                    </div>
                </Row>
            </Container>
        </>
    )
}

export default ViewUser;