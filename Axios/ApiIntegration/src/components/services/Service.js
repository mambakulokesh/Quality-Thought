
import axios from "axios";

export function getUSer(){
     var usersPromiseObj = axios.get("https://randomuser.me/api/?results=20");

     return usersPromiseObj;
     
}