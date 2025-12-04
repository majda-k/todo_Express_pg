

import postgres from "postgres";



// db connection
export const db = postgres('postgresql://adminer:1234@localhost:5431/mabase' , {prepare: false})


try{
    await db `SELECT 1`
    console.log("database connected !!!")

}catch(err){
    console.log("database Not connected !!!")
}
