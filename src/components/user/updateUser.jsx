import React,{ useState, useCallback} from "react";
import { useMutation } from '@apollo/react-hooks';
import { useLocation, useHistory } from "react-router-dom";

import Radio from "../common/radio/radio";
import Header from "../common/header/header";
import Loading from "../common/loading/loading";
import {Roles, getRole} from "../../configurations/roles";
import Schemas from "../../configurations/schema/schema";
import "./user.css"

const UpdateUser = () => {
	const [loading, setLoading] = useState(false);
	const history = useHistory()
	const location = useLocation();
	const {email, name, role }= location.state.detail;
	const [currentName, setName] = useState(name);
	const [currentRole, setRole]= useState(getRole(role).id);
	const [updateUser] = useMutation(Schemas.UPDATE_USER);

	const handleSelectRole = (roleKey) => {
		setRole(roleKey);
	}
	const handleUpdate = useCallback(() => {
		setLoading(!loading);
		updateUser({variables:{
				email: email,
				newAttributes:{
					name: currentName,
					role: currentRole
				}
			}
		});
	history.push('/');
	},[updateUser, history, currentRole, currentName, email, loading]);


	if (loading) return <Loading text="Loading..."/>;

	return (
		<form className="update-user-container" onSubmit={handleUpdate}>
			<Header title={email} buttonClass="btn save-button" value="Save"/>
			<div className="fields-container">
				<div className="name-container">
					<span>Name</span>
					<div>
						<input onChange={e => setName(e.target.value)} type="text" className="input-text" value={currentName}></input>
					</div>
				</div>
				<div className="role-container">
					{Roles.map((role) => (
					<Radio key={`${role.id}`}
					group="role"
					name={role.name}
					value={role.id}
					checked={role.id === currentRole?true:false}
					onChange={handleSelectRole}></Radio>
					))}
				</div>
			</div>
		</form>
	);
}
export default UpdateUser;
