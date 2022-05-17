import React, { useState, useEffect, useContext } from 'react'
import { Grid, Box, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { UserContext } from '../../App';



const useStyle = makeStyles({
    container: {
        border: '1px solid #d3cede',
        bgcolor: 'primary.main',
        borderRadius: 10,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width:310,
        height: 320,
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
        height: 150
    },
    textColor: {
        fontSize: 36,
        textAlign: 'center',

    },
    heading: {
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'center',
        textTransform: "uppercase"


    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word'
    }
})

const Posts = () => {

    const [data, setData] = useState([])
    const { state, dispatch } = useContext(UserContext)
    useEffect(() => {
        fetch('/mygraph', {

            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }

        ).then(res => res.json())
            .then(result => {
                console.log(result)
                setData(result.mygraph)
            })
    }, [])

    // 
    const classes = useStyle();





    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    }


    return (
        <>
            {
                data?.length ? data?.map(post => (
                    <Grid item lg={3} sm={4} xs={12}>

                        {
                            <Box sx={{ bgcolor: '#f5f5f5' }} className={classes.container}>
                                <Grid container justify="center" alignItems="center" >



                                    <Grid item xs={12}>
                                        <Typography className={classes.heading}>{post.title}</Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography className={classes.textColor}>
                                            <Link to={`/odgraph/${post._id}`}>Show</Link>
                                        </Typography>
                                    </Grid>



                                </Grid>

                            </Box>


                        }
                        {/* </Link> */}
                    </Grid>

                ))
                    : (
                        <Box style={{ color: '878787', margin: '30px 80px', fontSize: 18 }}>
                            No Post Made Yet
                        </Box>
                    )}
        </>
    )



}
// 
export default Posts;