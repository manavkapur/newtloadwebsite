import React from 'react'
import { makeStyles } from '@material-ui/core';


import {Line} from 'react-chartjs-2'

import { useRef } from 'react';




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
    image: {
        width: '100%',
        objectFit: 'contain',
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
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }

})

const Posts = () => {
    

    // 
    const classes = useStyle();

   
    
  

    const newData = {
        labels:  ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "First dataset",
            data:[18, 12, 6, 9,12,3],
            fill: false,
            // backgroundColor: "rgba(75,192,192,0.2)",
            backgroundColor: "rgba(255,26,104,0.2)",
            // borderColor: "rgba(75,192,192,1)",
            borderColor: "rgba(255,26,104,1)",
            tension:0.4,
            yAxisID:'y'
          },{
            label: "First dataset",
            data:[33, 53, 85, 41, 44, 65],
            fill: false,
            // backgroundColor: "rgba(75,192,192,0.2)",
            backgroundColor: "rgba(0,0,0,0.2)",
            // borderColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            tension:0.4,
            yAxisID:'y'
          }
        ]
      };
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


      let ref = useRef(null)
    return (
        <>
           {/* <div style={{height:"690px",width:"690px",margin :"auto"}}> */}
          <Line  ref= {ref}
           data={newData}
           options={options}
        //    height="1px"
        //    width="2px"
           />
        {/* </div> */}
        </>
    )



}
// 
export default Posts;