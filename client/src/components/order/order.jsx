import React from 'react'
import {MenuItem, Grid,Paper, Avatar, TextField, Button, Typography,Link ,makeStyles } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useEffect,useState } from 'react';

import { categories } from '../../constants/data';
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import M from 'materialize-css'
// 


const useStyles = makeStyles((theme) => ({
   
    paperStyle:
    {   padding :20,
        height:'500px',
        width:280, 
        margin:"20px auto"},
    
    avatarStyle:{
        backgroundColor:'#1bbd7e'
    },
    btnstyle:{
        margin:'8px 0'
    },
    formcontrol:{
        margin: theme.spacing(1),
        minWidth:200
    },
    select:{
        minWidth:'85%',
        maxWidth: '80%'
    },
    link:{
        textDecoration:'none',
        color:'#878787'
    }

  }))

const Order=()=>{
  
    const history = useHistory()
    const [title,setTitle] = useState(undefined)
    const [link,setLink] = useState(undefined)
    // const [email,setEmail] = useState(undefined)


    // const [college, setcollege] = React.useState("");
    // const [smilo,setFufa] = React.useState([]);
    const { handleSubmit} = useForm()

    // Function
    const onSubmit = (data) => console.log(data);

//   const handleChange = (event) => {
//       console.log(event.target.value)
//     setcollege(event.target.value);
//   };

  const handlebranch =(event)=>{
      console.log(event.target.value)
      setbranch(event.target.value)
  }
  const handleTitle =(event)=>{
    console.log(event.target.value)
    setTitle(event.target.value)
}
const handleLink =(event)=>{
    console.log(event.target.value)
    setLink(event.target.value)
}

    const [branch,setbranch] =  useState("al")
    const [value,setValue]=  useState()
    const classes = useStyles();
    const [data,setData] = useState([])
    const [submit,setSubmit] =  useState(undefined)



    let fufa = []
  
    let i = 0 

    // const getUsers = async () => {
    //     try {
    //         const url = "https://raw.githubusercontent.com/MustansirZia/institutions-api/master/data/json/indian_universities.json"
    //         const response = await fetch(url)
    //         const result = await response.json()

    //         setData(result);
    //         // console.log(result)
    //         result.map(option=>{
    //             // console.log(option)
    //             fufa[i] = option["University Name"]
    //             i = i +  1

                
    
    //         })
    //         fufa.sort()
    //         setFufa(fufa)
            
            
    //     } catch (error) {
           
    //         console.log("my error is "+ error);
    //     }
    // }

    
    // useEffect(()=>{

    //     getUsers()
       
    //  },[])

    
    const PostData = ()=>{
        
            uploadFields()
        
       
    }




      
     const uploadFields = ()=>{
   
        fetch("/createorder",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                link
                
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:"Ordered",classes:"#43a047 green darken-1"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })



    }








    return(
        <Grid>
            
            <Paper elevation={10}  className = {classes.paperStyle}>
                <Grid align='center'>
                     <Avatar  className = {classes.avatarStyle}><LockOutlinedIcon  /></Avatar>
                     <Typography variant='h3' color='secondary'>Order</Typography>
                    
                </Grid>
             
                 <form onSubmit={handleSubmit(onSubmit)}>
                 
              
                <TextField label='Title' 
           
                  color='secondary'
                 placeholder='Enter Title'
                 fullWidth required
                 name = "Title"
                value= {title}
                onChange={handleTitle}
                variant='outlined'
                style={{margin:'20px 20px 0 0 '}}
                 />
             <TextField label='Link' 
                  color='secondary'
                 placeholder='Enter Google Drive Link'
                 fullWidth required
                 name = "Link"
                value= {link}
                onChange={handleLink}
                variant='outlined'
                style={{margin:'20px 20px 0 0 '}}
                
                 />
          
          
          

        

        







                <Button type='submit' color='secondary' variant="contained"   className = {classes.btnstyle} fullWidth
                onClick={()=>PostData()}
                style={{margin:'20px 20px 0 0 '}}
                >Place</Button>
              
           </form> 
           </Paper>
            
        </Grid>
    )
}

export default Order