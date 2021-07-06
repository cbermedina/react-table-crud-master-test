import React, { useState, useCallback, useEffect} from "react";
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";
import Table from "../common/table/table";
import Header from "../common/header/header";
import Checkbox from "../common/checkbox/checkbox";
import Loading from "../common/loading/loading";
import { getRole } from '../../configurations/roles';
import Schemas from "../../configurations/schema/schema";

const Users = ({data, refetch}) => {
	const [listUsers,setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const history = useHistory()

	const [deleteUsers] = useMutation(Schemas.REMOVE_USERS, {
        refetchQueries: [{
			query: Schemas.ALL_USERS_QUERY
		}]
    });

    const [resetUsers] = useMutation(Schemas.RESTART_USERS, {
        refetchQueries: [{
			query: Schemas.ALL_USERS_QUERY
		}]
    });

	const redirectTo = useCallback((user)=>{
		setLoading(true);
		history.push({
			pathname: '/edit',
			state: { detail: user }
		});
	},[history]);

	const onReset = useCallback(() => {
		resetUsers();
		refetch();
	},[resetUsers, refetch]);

	const onRemove = useCallback((emails) => {
        deleteUsers({variables:{
            emails: emails
        }});
    },[deleteUsers]);

	const handleRemove = useCallback(() => {
		const [itemToDelete, users] = listUsers.reduce(([acumulator,users],currentUser) => {
			if(currentUser.checked) acumulator.push(currentUser.email);
			else users.push(currentUser)
			return [acumulator,users];
		},[[],[]]);
		onRemove(itemToDelete);
		setUsers(users);
	},[listUsers,onRemove]);

	const handleCheck = useCallback((user)=>{
		const users = [...listUsers];
		const index = users.indexOf(user);
		users[index] = { ...users[index] };
		users[index].checked = !users[index].checked;
		setUsers(users);
	},[listUsers]);

	const columns = [
        {
			key: "",
			content: (user) => (
				<Checkbox checked={user.checked?true:false} onClick={()=>{handleCheck(user)}}  />
			),
		},
		{ path: "email", label: "EMAIL", setColor: true, isDetail:(user) => {redirectTo(user)} },
		{ path: "name", label: "NAME" },
		{ path: "role", label: "ROLE", homologate: (role)=> getRole(role).name },
	];

	useEffect(()=>{
		setUsers(data.allUsers);
	},[data]);

	if (loading) return <Loading text="Loading..."/>;

	return (
		<div>
			<Header title="Users" buttonClass="btn delete-button" value="Delete" onEvent={handleRemove} onReset={onReset}/>
				<Table
				columns={columns}
				data={listUsers}
			>
			</Table>
		</div>
	);
}
export default React.memo(Users);
