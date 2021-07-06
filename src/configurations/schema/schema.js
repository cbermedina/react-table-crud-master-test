import{ gql } from 'apollo-boost';
export default  {
    ALL_USERS_QUERY: gql`
    query {
        allUsers {
        email
        name
        role
        }
    }
    `,

    GET_USER: gql`
    query user($email: ID!) {
        user(email: $email) {
        email
        name
        role
        }
    }
    `,

    UPDATE_USER: gql`
    mutation updateUser($email: ID!, $newAttributes: UserAttributesInput!) {
        updateUser(email: $email, newAttributes: $newAttributes){
            name,
            role
        }
    }
    `,
    RESTART_USERS: gql`
    mutation resetUsers {
        resetUsers
    }
    `,

    REMOVE_USERS: gql`
    mutation deleteUsers($emails: [ID]!) {
        deleteUsers(emails: $emails)
    }
    `
};