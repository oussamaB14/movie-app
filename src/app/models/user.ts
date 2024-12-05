
export interface User {
    uid: string;
    name: string;
    email: string;
    age: number;
    photoURL: string;
    favorites: number[];
    isAdmin?: boolean; 
    isDisabled?: boolean;
  }