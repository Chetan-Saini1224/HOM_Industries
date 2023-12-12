
import CredentialsProvider  from "next-auth/providers/credentials"
import { connectToDB } from "@/utils/database";
import User from "@/models/user";

export const options = {
  providers:[
    CredentialsProvider({
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
            username: {type: "text", placeholder: "Username" ,label:"Username"},
            password: {type: "password",  placeholder: "Password",label:"Password" }
        },
        
        async authorize(credentials,req){
            //fetch user from database
            connectToDB();
            const user = await User.findOne({username: credentials.username,password:credentials.password}); 
            if(user){
                return user;
            }
            return null;   
        }
    })
  ],
}