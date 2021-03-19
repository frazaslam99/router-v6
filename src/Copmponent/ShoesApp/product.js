import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from '../../shoes.json';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "../../App.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function Product() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        {Object.keys(Shoes).map(keyName => {
                            const shoe = Shoes[keyName];
                            return (
                                <Grid item xs={12} md={4} lg={4} className="productgrid">
                                    <Link key={keyName} to={`/product/${keyName}`}>
                                        <center>
                                            <div className="link">
                                                <h4>{shoe.name}</h4>
                                                <img src={shoe.img} height={150} alt="shoe" />

                                            </div>
                                        </center>
                                    </Link>
                                </Grid>

                            );
                        })}





                    </Grid>

                </Grid>
            </Grid>

        </div>
    );

    // return (
    //     <div>
    //         <h1>Welcome to Product</h1>
    //         <div className="productContainer">
    //             {Object.keys(Shoes).map(keyName=>{
    //                 const shoe = Shoes[keyName];
    //                 return (
    //                     <Link key={keyName} 
    //                         className="link" 
    //                         to={`/product/${keyName}`}>
    //                             <h4>{shoe.name}</h4>
    //                             <img src={shoe.img} height={150} alt="shoe" />
    //                 </Link>)
    //             })}
    //         </div>
    //     </div>
    // );
}

export default Product;