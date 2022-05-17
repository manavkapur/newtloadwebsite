import React from 'react'
import { MenuItem, Grid, Paper, Avatar, TextField, Button, Typography, Link, makeStyles } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useEffect, useState } from 'react';

import { categories } from '../../constants/data';
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router';
import M from 'materialize-css'
// 


const useStyles = makeStyles((theme) => ({

    paperStyle:
    {
        padding: 20,
        height: '800px',
        width: 280,
        margin: "20px auto"
    },

    avatarStyle: {
        backgroundColor: '#1bbd7e'
    },
    btnstyle: {
        margin: '8px 0'
    },
    formcontrol: {
        margin: theme.spacing(1),
        minWidth: 200
    },
    select: {
        minWidth: '85%',
        maxWidth: '80%'
    },
    link: {
        textDecoration: 'none',
        color: '#878787'
    }

}))

const SubmitOrder = () => {
    const [title, setTitle] = useState()
    const history = useHistory()
    const [name, setName] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [email, setEmail] = useState(undefined)


    const [college, setcollege] = React.useState("");
    const [smilo, setFufa] = React.useState([]);
    const { handleSubmit } = useForm()

    // Function
    const onSubmit = (data) => console.log(data);


    let i = 0;
    var j = 0;
    var date = 0;
    var data = 0;
    const labels = new Array(48);
    const timdata = new Array(2);
    const handleDate = (event) => {
        console.log(event.target.value)
        console.log("checki");
        console.log(i);
        labels[i] = event.target.value
        console.log("check")
        console.log(labels[1])
    };
    const handleData = (event) => {
        console.log(event.target.value)
        timdata[j] = event.target.value
        console.log("check")
        console.log(timdata)

    };


    const handleTitle = (event) => {
        console.log(event.target.value)
        setTitle(event.target.value);
    };


    const [branch, setbranch] = useState("al")

    const classes = useStyles();

    const [submit, setSubmit] = useState(undefined)






    const PostData = () => {

        uploadFields()


    }

    const { id } = useParams()


    const labeldata = [1, 2]
    const uploadFields = (orderId) => {




        fetch(`/creategraph/${id}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                "labels": labels,
                "data": timdata
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                }
                else {
                    M.toast({ html: "Done", classes: "#43a047 green darken-1" })
                    history.push('/admin')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    const changeData = () => {
        i = i + 1;
        j = j + 1;
    }

    const chekcData = () => {
        console.log(labels[0])
        console.log(labels[1])

    }







    return (





        <Grid>


            <Grid align='center'>
                {/* <Avatar className={classes.avatarStyle}><LockOutlinedIcon /></Avatar> */}
                <Typography variant='h3' color='secondary'>Order Data</Typography>

            </Grid>

            <form onSubmit={handleSubmit(onSubmit)}>

                {/* <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                    onClick={() => changeData()}
                    style={{ margin: '20px 20px 0 0 ' }}
                >Next</Button>
                <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                    onClick={() => chekcData()}
                    style={{ margin: '20px 20px 0 0 ' }}
                >Check</Button> */}


                 
                    <TextField label='Title'

                    color='secondary'
                    placeholder='Enter Title'
                    fullWidth required
                    name="Title"
                    value={title}
                    onChange={handleTitle}
                    variant='outlined'
                    style={{ margin: '20px 20px 0 0 ' }}
                />

                
                     <Grid item xs={6}>
                    <TextField label='Date 1'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    
               
                
                     <Grid item xs={6}>
                    <TextField label='Data 1'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                </Grid>
                <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                    onClick={() => changeData()}
                    style={{ margin: '20px 20px 0 0 ' }}
                >Next</Button>
               
                 <Grid item xs={6}>
                    <TextField label='Date 2'

                    color='secondary'
                    placeholder='Enter date'
                    fullWidth required
                    name="Date"
                    value={labels[i]}
                    onChange={handleDate}
                    variant='outlined'
                    style={{ margin: '20px 20px 0 0 ' }}
                />
                </Grid>
              
                 <Grid item xs={6}>
                    <TextField label='Data 2'
                    color='secondary'
                    placeholder='Enter Data'
                    fullWidth required
                    name="Data"
                    value={timdata[i]}
                    onChange={handleData}
                    variant='outlined'
                    style={{ margin: '20px 20px 0 0 ' }}

                />
                </Grid>
                {/* {
                        i = i + 1

                    }
                    {
                        j = j + 1
                    } */}
         
                      
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                   
                     <Grid item xs={6}>
                    <TextField label='Date 3'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                
                  
                     <Grid item xs={6}>
                    <TextField label='Data 3'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                 
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                
                     <Grid item xs={6}>
                    <TextField label='Date 4'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                   
                    </Grid>
                 
                     <Grid item xs={6}>
                    <TextField label='Data 4'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                    
                     <Grid item xs={6}>
                    <TextField label='Date 5'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 5'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                     </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                   
                     <Grid item xs={6}>
                    <TextField label='Date 6'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 6'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                   
                     <Grid item xs={6}>
                    <TextField label='Date 7'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 7'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                     </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                   
                     <Grid item xs={6}>
                    <TextField label='Date 8'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 8'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                     </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                    
                     <Grid item xs={6}>
                    <TextField label='Date 9'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 9'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[i]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                    
                     <Grid item xs={6}>
                    <TextField label='Date 10'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 10'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                    
                     <Grid item xs={6}>
                    <TextField label='Date 11'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 11'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                    
                     <Grid item xs={6}>
                    <TextField label='Date 12'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 12'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                    
                     <Grid item xs={6}>
                    <TextField label='Date 13'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 13'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                    
                     <Grid item xs={6}>
                    <TextField label='Date 14'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 14'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                   <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                     <Grid item xs={6}>
                    <TextField label='Date 15'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 15'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                     
                     <Grid item xs={6}>
                    <TextField label='Date 16'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 16'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                    
                     <Grid item xs={6}>
                    <TextField label='Date 17'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 17'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                   
                     <Grid item xs={6}>
                    <TextField label='Date 18'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 18'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                    
                     <Grid item xs={6}>
                    <TextField label='Date 19'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 19'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                    
                     <Grid item xs={6}>
                    <TextField label='Date 20'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 20'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                   
                     <Grid item xs={6}>
                    <TextField label='Date 21'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 21'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                    
                     <Grid item xs={6}>
                    <TextField label='Date 22'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 22'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                   
                     <Grid item xs={6}>
                    <TextField label='Date 23'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 23'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                   
                     <Grid item xs={6}>
                    <TextField label='Date 24'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 24'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                    
                     <Grid item xs={6}>
                    <TextField label='Date 25'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 25'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                    
                     <Grid item xs={6}>
                    <TextField label='Date 26'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 26'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                  
                     <Grid item xs={6}>
                    <TextField label='Date 27'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 27'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                   
                     <Grid item xs={6}>
                    <TextField label='Date 28'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 28'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                    
                     <Grid item xs={6}>
                    <TextField label='Date 29'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 29'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                   
                     <Grid item xs={6}>
                    <TextField label='Date 30'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 30'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                   
                     <Grid item xs={6}>
                    <TextField label='Date 31'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 31'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                     <Grid item xs={6}>
                    <TextField label='Date 32'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 32'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>

                     <Grid item xs={6}>
                    <TextField label='Date 33'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 33'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                   <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                     <Grid item xs={6}>
                    <TextField label='Date 34'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 34'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                     <Grid item xs={6}>
                    <TextField label='Date 35'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 35'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                     <Grid item xs={6}>
                    <TextField label='Date 36'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 36'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                   <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                     <Grid item xs={6}>
                    <TextField label='Date 37'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 37'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                     <Grid item xs={6}>
                    <TextField label='Date 38'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 38'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                     <Grid item xs={6}>
                    <TextField label='Date 39'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 39'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                    
                     <Grid item xs={6}>
                    <TextField label='Date 40'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 40'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                   <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                     <Grid item xs={6}>
                    <TextField label='Date 41'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 41'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                   
                     <Grid item xs={6}>
                    <TextField label='Date 42'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 42'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                     <Grid item xs={6}>
                    <TextField label='Date 43'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 43'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                     <Grid item xs={6}>
                    <TextField label='Date 44'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 44'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                   
                     <Grid item xs={6}>
                    <TextField label='Date 45'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 45'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                     <Grid item xs={6}>
                    <TextField label='Date 46'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 46'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                     <Grid item xs={6}>
                    <TextField label='Date 47'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 47'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                    <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                        onClick={() =>changeData()}
                        style={{ margin: '20px 20px 0 0 ' }}
                    >Next</Button>
                     <Grid item xs={6}>
                    <TextField label='Date 48'

                        color='secondary'
                        placeholder='Enter date'
                        fullWidth required
                        name="Date"
                        value={labels[i]}
                        onChange={handleDate}
                        variant='outlined'
                         style={{ margin: '20px 20px 0 0 ' }}

                    />
                    </Grid>
                     <Grid item xs={6}>
                    <TextField label='Data 48'
                        color='secondary'
                        placeholder='Enter Data'
                        fullWidth required
                        name="Data"
                        value={timdata[j]}
                        onChange={handleData}
                        variant='outlined'
                        style={{ margin: '20px 20px 0 0 ' }}

                    /> 
                   </Grid>









                <Button type='submit' color='secondary' variant="contained" className={classes.btnstyle} fullWidth
                    onClick={() => PostData()}
                    style={{ margin: '20px 20px 0 0 ' }}
                >SubmitOrder</Button>
                {/* <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography> */}

            </form>


        </Grid>
    )
}

export default SubmitOrder