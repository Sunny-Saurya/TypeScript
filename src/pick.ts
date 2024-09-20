interface User2 {
    id: string;
    name: string;
    email: string;
    age: string;
    password : string;
}

type UserProfile = Pick<User2, 'name' | 'age' | 'email'>;

const displayUserProfile = (user:  UserProfile) => {
    console.log(`Name : ${user.name}, Email: ${user.email}`);
}