const users = [
    { prenom: 'Fallou', nom: 'Cisse', statut: 0, age: 10, role: 'admin' },
    { prenom: 'Samba', nom: 'Diagana', statut: 0, age: 25, role: 'admin' },
    { prenom: 'Soukeyna', nom: 'Diallo', statut: 0, age: 40, role: 'user' },
    { prenom: 'Adama', nom: 'Faye', statut: 0, age: 70, role: 'user' },
    { prenom: 'Jonh', nom: 'Lakh', statut: 0, age: 28, role: 'user' },
];

let user = { prenom: 'Fallou', nom: 'Cisse', statut: 0, age: 10, role: 'admin'};
const getadmins = (users) => {
    return users.filter(user => user.role === 'admin');
};
// console.log(getadmins(users));

// let user = { prenom: 'Fallou', nom: 'Cisse', statut: 0, age: 10, role: 'admin'};
// let pnom = user.prenom;
// let nom1 = user.nom;
// let role1 = user.role;
// console.log(pnom, nom1, role1);

//avec destructuration
// const { prenom, nom, role } = user;
// console.log(prenom, nom, role);

let usermap = users.map(({ prenom, role }) => {
    return {
        p: prenom,
        r: role
    }
});
console.log(usermap);

const[user1, , user3] = users;
console.log(user1, user3);

let equipe = [...users, { prenom: 'Moussa', nom: 'Sow', statut: 0, age: 30, role: 'user' }];
console.log(equipe);

equipe[1].statut=2;
console.log(equipe[1].statut);