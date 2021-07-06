const Roles =  [
    {
        id:"ADMIN",
        name:"Admin"
    },
    {
        id:"DEVELOPER",
        name:"Developer"
    },
    {
        id:"APP_MANAGER",
        name:"App Manager"
    },
    {
        id:"MARKETING",
        name:"Marketing"
    },
    {
        id:"SALES",
        name:"Sales"
    },
]

const getRole = (role)=>{
    switch (role) {
        case Roles[0].id || Roles[0].name:
            return Roles[0];
        case Roles[1].id || Roles[1].name:
            return Roles[1];
        case Roles[2].id || Roles[2].name:
            return Roles[2];
        case Roles[3].id || Roles[3].name:
            return Roles[3];
        case Roles[4].id || Roles[4].name:
            return Roles[4];
        default:
            return Roles[1];
    }
}
module.exports = {Roles, getRole}