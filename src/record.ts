interface User5 {
    id: string;
    name: string;
  }
  
  // Using Record to type an object with string keys and User values
  type Users = Record<string, User5>;
  
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }