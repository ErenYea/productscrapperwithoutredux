import React, { useState, useEffect } from "react";
import {useFetch} from "../customhook/2-useFetch";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styled from 'styled-components'
import Button from "@mui/material/Button";
import Axios from "axios";
import { useStateValue } from '../../Stateprovider';
import { tableCellClasses } from '@mui/material/TableCell';





const Tables = (props) =>{
    const [state, dispatch ] = useStateValue()
    // const {loading,products} = useFetch('http://localhost:3001/table');
    // console.log(products);
    let counter = 0
    let products = state.data
    const removeuser = async (item_number) => {
        const respnce = await Axios.post("http://localhost:3001/remove", {
        item_number: item_number
        }).catch((error) => {
        console.log(error);
        });
        console.log(respnce);
        dispatch({type:'REMOVE',item_number:item_number})
    };
    const remove = (item_number)=>{
        console.log(item_number);
        dispatch({type:'REMOVE',item_number:item_number})
        // removeuser(item_number);
    }
    // if (loading){
    //     return (
    //         <div className="container ">
    //             <Box sx={{ display: 'flex' , justifyContent: 'center'}}>
    //                 <CircularProgress />
    //             </Box>
    //         </div>
    //     )
    // } else {
        // console.log(products[0].data[0]);
        return (
            <CustomDiv className="container review">
                
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 850 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Item Number</TableCell>
                            <TableCell align="right">Product title</TableCell>
                            <TableCell align="right">Product url</TableCell>
                            <TableCell align="right">image url</TableCell>
                            <TableCell align="right">price</TableCell>
                            
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {products.map((row,index) => (
                            <TableRow
                            key={counter+index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.item_number}
                            </TableCell>
                            <TableCell align="right">{row.product_title}</TableCell>
                            <TableCell align="right">{row.product_url}</TableCell>
                            <TableCell align="right">{row.image_url}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right"><Button
                            variant="contained"
                            onClick={()=>remove(row.item_number)}
                            size="medium"
                            color="primary"
                            >
                            Remove
                            </Button></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CustomDiv>
        )
    }



// }


const CustomDiv = styled.div`
  width:2000px;
  max-width:1239px;
//   padding: 0 0;
  

`
export default Tables;
