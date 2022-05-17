import { Button, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Grid } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import {  Typography } from '@material-ui/core';
import { categories } from '../../constants/data';
import { UserContext } from '../../App';
import { useContext } from 'react';

const useStyle = makeStyles({
    table: {
        border: '1px solid rgba(224, 224, 224, 1)',

        wordWrap: 'break-word'
    },
    write: {
        margin: 20,
        width: '85%',

        textDecoration: 'none'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        wordWrap: 'break-word'
    },
    heading:{
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'center',
        textTransform: "uppercase"
    },
    about:{
        fontSize: 10,
        fontWeight: 100,
        textAlign: 'center',
        textTransform: "uppercase",
        fontWeight: "bold"
    }
})

const Categories = ({ match }) => {
    const { state, dispatch } = useContext(UserContext)
    const classes = useStyle();
    const location = useLocation();
    let params = new URLSearchParams(location.search);
    return (
        <>
            {state ? (<Link to={'/order'} style={{ textDecoration: 'none' }}>
                <Button variant="contained" color='secondary' className={classes.write}>Create order</Button>
            </Link>) : (<Link to={'/signin'} style={{ textDecoration: 'none' }}>
                <Button variant="contained" color='secondary' className={classes.write}>Create Order</Button>
            </Link>)}

           
            <Typography className={classes.heading}>About us</Typography>
            <Typography className={classes.about}>We are Organistion that do Net Load forecasting for you by using best algorithms</Typography>

          
        </>
    )
}

export default Categories;