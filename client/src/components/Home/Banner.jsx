
import { makeStyles, Box, Typography } from "@material-ui/core"


const useStyles = makeStyles((theme)=>({
    image:{
        background: `url(${'https://images.pexels.com/photos/9799994/pexels-photo-9799994.jpeg?cs=srgb&dl=pexels-kindel-media-9799994.jpg&fm=jpg&w=4000&h=3000'}) center/50% repeat-x #000`,
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
  
        '& :first-child':{
            fontSize: 66,
            color: '#FFFFFF',
            lineHeight : 1,
            wordWrap: 'break-word',
            [theme.breakpoints.down('xs')]: {
                fontSize: 20,
            },
            
            


            
        },
        '& :last-child':{
            fontSize: 20,
            background: '#FFFFFF',
            wordWrap: 'break-word',
            [theme.breakpoints.down('xs')]: {
                fontSize: 10,
            },
         

        }

    }
}))

const Banner = ()=>{
    const classes  = useStyles()
    
    return (
       <Box className={classes.image} >
           <Typography>Load Stats</Typography>
           <Typography>Projecting the loads</Typography>

       </Box>
    )
}

export default Banner