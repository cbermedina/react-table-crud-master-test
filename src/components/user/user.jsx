import { NetworkStatus } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import Users from './users';
import Loading from "../common/loading/loading"
import Schemas from "../../configurations/schema/schema";

const User = () => {
    const { loading, error, data, refetch, networkStatus } = useQuery(Schemas.ALL_USERS_QUERY,{
      fetchPolicy:"no-cache",
      notifyOnNetworkStatusChange: true
    });

    if (loading || networkStatus === NetworkStatus.refetch) return <Loading text="Loading..."/>;

    if (error) {
      return <p>Error: {JSON.stringify(error)}</p>;
    }

    return (
      <div><Users data={data} refetch={refetch}></Users></div>
    )
  }
  export default User;