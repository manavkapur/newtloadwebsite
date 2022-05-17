
import { Grid } from "@material-ui/core"


import Posts from "./post/Posts"


const UserHome = () => {
    return (
        <>
       
            <Grid container >
                <Grid container item xs={12} sm={10} lg={10}>
                    <Posts />
                </Grid>


            </Grid>

        </>
    )
}
// 
export default UserHome