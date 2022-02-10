import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux';

const UserContainer = ({fetchUsers, user }) => {
    useEffect(() => {
        fetchUsers();
    }, []);

    return user.loading ? <h2>Loading...</h2> : user.error ? <h2>{user.error}</h2> : (
        <>
            <h2>Users</h2>
            <h4>{user.users && user.users.map(user => <p>{user}</p>)}</h4>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)