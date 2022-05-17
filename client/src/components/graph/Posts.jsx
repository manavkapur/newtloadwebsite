import { useTheme,Grid,Button, Box, Typography, makeStyles , useMediaQuery} from '@material-ui/core';
import React, { useState, useEffect, useContext } from 'react'

import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { UserContext } from '../../App';
import {Chart as ChartJS} from 'chart.js/auto'
import {Line} from 'react-chartjs-2'
import { useCallback } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import {useParams} from 'react-router-dom'

var XLSX = require("xlsx");
const path = require('path')
const useStyle = makeStyles({
    container: {
        border: '1px solid #d3cede',
        borderRadius: 10,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',

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
        color: '#878787',
        fontSize: 12
    },
    heading: {
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'center'


    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word'
    },
    btnstyle:{
        margin:'8px 0',
        color: '#878787',
        backgroundColor:'#f06292'
    },
})

// useEffect(()=>{
//     fetch(`/user/${userid}`,{
//         headers:{
//             "Authorization":"Bearer "+localStorage.getItem("jwt")
//         }
//     }).then(res=>res.json())
//     .then(result=>{
//         //console.log(result)
      
//          setProfile(result)
//     })
//  },[])

const Posts = () => {
    const {graphId} = useParams()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
    const [data, setData] = useState()
    const { state, dispatch } = useContext(UserContext)
    useEffect(() => {
        // if(state?.role=='admin')
        // {
        //     history.push('/')
        // }
        fetch(`/odgraph/${graphId}` )
        .then(res => res.json())
            .then(result => {
                console.log(result.mygraph)
                setData(result.mygraph)
                
            })
    }, [])
   

    // 
    const classes = useStyle();
    const history = useHistory();
    const newData = {
        labels: data?data.labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "NET LOAD",
            data: data?data.data:[33, 53, 85, 41, 44, 65],
            fill: false,
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,26,104,1)",
            tension:0.4,
          }
        ]
      };
    //   
      let ref = useRef(null)
      const downloadImage = useCallback(()=>{
          const link = document.createElement("a");
          link.download = "chart.png"
          link.href = ref.current.toBase64Image();
          link.click();

      },[])
    //   
      const Data = [data?data.labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],data?data.data:[33, 53, 85, 41, 44, 65],]
      const options = {
        responsive: true,
        scales:{
            y:{
                beginAtZero: true,
                title:{
                    display:true,
                    text:'KW'
                }
            },
            x:{
                beginAtZero: true,
                title:{
                    display:true,
                    text:'Time'
                }
            },
            percentage:{
                beginAtZero:true,
                position:'right'
            }
        }
      };
      const workSheetCOlumnName = ["date","data"]
      const handleOnExport = ()=>{
        const workBook = XLSX.utils.book_new();
        const workSheetdata = [workSheetCOlumnName,...Data]
        const workSheet = XLSX.utils.aoa_to_sheet(workSheetdata)
        XLSX.utils.book_append_sheet(workBook,workSheet,'Users')
        XLSX.writeFile(workBook,'result.xlsx')
     
    }

    return(
        <>
       
        {isMobile ? (<>
        <Grid container>
         <Grid container item xs ={12}>
         <Button type='button' onClick={downloadImage} className={classes.btnstyle}>
            Download
        </Button>
         </Grid>
         <Grid container item xs ={12}>
         <Button type='button' onClick={handleOnExport} className={classes.btnstyle}>
            Download Excel
        </Button>
         </Grid>
         <Grid container item xs ={12}>
         <div style={{height:"560px",width:"800px",margin :"auto",marginTop:"100px"}}>
         <Line  ref= {ref} 
          data={newData}
          options={options}/>
          </div>
         </Grid>
        </Grid>
        
          
            
        </>
    ): (
        <>
        <button type='button' onClick={downloadImage}>
            Download
        </button>
        <button type='button' onClick={handleOnExport}>
            Download Excel
        </button>
        <div style={{height:"560px",width:"900px"}}>
          <Line  ref= {ref} 
          data={newData}
          options={options}/>
        </div>

        </>
    )}
     </>

)
}
// 
export default Posts;