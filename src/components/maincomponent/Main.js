import React, { useState, useEffect } from 'react'
import { BrowserRouter as Route, Switch, useHistory, useLocation} from 'react-router-dom'
import Toolbar from '../toolbar/toolbar'
import Homepage from '.././homepage/Homepage'
import Homepage2 from '.././homepage_2/Homepage2'
import axios from 'axios'

export default function Main(){
    const history = useHistory()
    const API_GETDATA = 'https://api.themoviedb.org/3/discover/movie'
    const API_SEARCH = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = '24d2ef4c222c1fde308f078d1d7fae11'
    const [dataall,setDaataAll] =  useState([])
    const [dataall2,setDaataAll2] =  useState([])
    const [datasearch,setDataSearch] =  useState([])
    const location = useLocation()
    

    const funSearch = (data) =>(setDataSearch(data))
    const search = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault()
            history.push('/')
            sessionStorage.removeItem('item')
            let api = `${API_SEARCH}?api_key=${API_KEY}&query=${datasearch}`
            setDaataAll([])
            if(datasearch === ''){
                getData(`${API_GETDATA}?api_key=${API_KEY}`)
            }else{
                getData(api)
            }
            setDataSearch("")
        }
    }

    async function getData(api){
        const res = await axios.get(api)
        const data = await res.data.results
        setDaataAll(data)
    }

    const redirectHome = () => {
        history.push('/')
        sessionStorage.removeItem('item')
        getData(`${API_GETDATA}?api_key=${API_KEY}`)
    }
    const eventClick = (item) => {
        sessionStorage.setItem('item', JSON.stringify(item))
        setDaataAll2(item)
        history.push('/home2')
    }

    useEffect(()=> {
        const session_items = sessionStorage.getItem('item')
        if(session_items){
            let items = JSON.parse(sessionStorage.getItem('item'))
            setDaataAll2(items)
        }else{
            getData(`${API_GETDATA}?api_key=${API_KEY}`)
        }
    },[])

    return (
        <div>
            <Toolbar searchData={funSearch} enters={search} defaultVal={datasearch} redirectHome={redirectHome}></Toolbar>
            <Switch>
                <Route path="/" exact>
                    <Homepage items={dataall} eventClick={eventClick}></Homepage>
                </Route>
                <Route path="/home2">
                    <Homepage2 items={dataall2}></Homepage2>
                </Route>
            </Switch>
        </div>
        
    )
}