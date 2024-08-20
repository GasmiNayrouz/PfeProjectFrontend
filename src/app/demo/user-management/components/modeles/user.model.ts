import { Role } from "src/app/demo/role-management/modeles/Role";


export interface User {
  id : number;
  username: string;
  email: string;
  role :Role;
  phoneNumber : string;
  matricule :String ;
  password:String

 }
 export interface userId {
 userId: number;
 }
