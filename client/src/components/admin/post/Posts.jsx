import React, { useState, useEffect, useContext } from 'react'
import { Button, Grid, Box, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App'



const useStyle = makeStyles({
    container: {
        border: '1px solid #d3cede',
        borderRadius: 10,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',

        height: 400,
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },

    textColor: {
        color: '#878787',
        border: "1px solid #f44336",
        wordWrap: "break-word",
        cursor: 'pointer'
    },

    detail: {
        fontSize: 14,
        wordBreak: 'break-word'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }

})

const Posts = () => {
    // const { search } = useLocation();
    const [data, setData] = useState([])
    const { state, dispatch } = useContext(UserContext)
    useEffect(() => {
        if (state?.role == 'customer') {
            history.push('/')
        }

        fetch("/allorder").then(res => res.json())
            .then(result => {
                console.log(result)
                setData(result.orders)
            })




    }, [])



    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    // 
    const classes = useStyle();

    const history = useHistory();

    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    }
    const Archieve = (postId) => {
        fetch(`/updateorder/${postId}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
              
            },
            body: JSON.stringify({
                status:"completed"
            })
        })
        window.location.reload(false);
    }



    return (
        <>
            {
                data.length ? data.map(post => (
                    <Grid item lg={12} sm={12} xs={12}>

                        {
                            <Box className={classes.container}>
                                <Grid container  >




                                    <Grid item xs={12}>
                                        <Typography className={classes.textColor}>Title: {addEllipsis(post.title, 20)}</Typography>
                                    </Grid>

                                    <Grid item xs={12}>

                                        <Typography className={classes.textColor}>
                                            Data: 
                                            
                                            <Link to={{ pathname: `https://${post.link}` }} target="_blank" >
                                                Link
                                                </Link>
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography className={classes.textColor}>Status:{post.status}</Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography className={classes.textColor}>Customer:
                                            <Link to={`/profile/${post?.postedBy?._id}`}>{post?.postedBy?.name}</Link>
                                        </Typography>
                                    </Grid>

                                    <Button type='submit' color='primary' variant="contained" className={classes.btnstyle} fullWidth
                                        onClick={() => openInNewTab(`/creategraph/${post?.postedBy?._id}`)}
                                    >

                                        Complete</Button>

                                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                                        onClick={() => Archieve(post?._id)}
                                    >

                                       Archive </Button>


                                </Grid>




                            </Box>


                        }

                    </Grid>

                ))
                    : (
                        <Box style={{ color: '878787', margin: '30px 80px', fontSize: 18 }}>
                            No Order yet
                        </Box>
                    )}
        </>
    )



}
// 
export default Posts;