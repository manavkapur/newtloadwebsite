
import { Grid } from "@material-ui/core"

import Posts from "./Posts"



const UserHome = () => {
    return (
        <>
       
            <Grid container >
            <Grid container item  xs ={12} >
            <Posts></Posts>
            </Grid>
            

            </Grid>

        </>
    )
}
// 
export default UserHome