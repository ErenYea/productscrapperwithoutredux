import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';

import ErrorPage from '../Error'
import Tables from './table';
import { useStateValue } from '../../Stateprovider';

const AdminPanel = (props)=>{
    const [state, dispatch ] = useStateValue()
    const [adminrights,setadminrights] = useState(false)
    // const cookies = new Cookies();

    // console.log(cookies.get('username'))
    useEffect(()=>{
        if (state.user=='admin'){
            console.log(state.user);
            setadminrights(true);
        }else{
            setadminrights(false);
    }
    },[])
    

    if (adminrights) {
        return(
            <main>
                <section className="container">
                    <div className="title">
                    <h2>Admin</h2>
                    <div className="underline"></div>
                    </div>
                    <Tables/>
                </section>
            </main>
        )
    } else {
        return(
            <ErrorPage errormessage="Don't Have Admin Rights" redire="login"></ErrorPage>
        )
    }


}

export default AdminPanel;