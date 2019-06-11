import React from 'react';
import { JustOf } from '../../utils';

const AdminView = (props) => {
    return <button onClick={props.logout}>Admin</button>
}

AdminView.getName = JustOf("admin")

export default AdminView;