


//without a matcher this one lines 
//applies next-auth to entrire project
export {default} from "next-auth/middleware";


//Applies next-auth only to matching routes : can be regex
export const config =  { matcher: ["/add_products","/inventory"]}
