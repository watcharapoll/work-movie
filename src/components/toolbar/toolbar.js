import React from 'react'
import './toolbar.css'

export default function Toolbar({defaultVal,searchData,enters,redirectHome})  {
    return (
        <div className="main__toolbar">
            <div className="toolbar__logo" onClick={redirectHome}>
               <span>MOVIE</span>
            </div>
            <div className="toolbar__search">
                <form>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={defaultVal}
                        onChange={(e)=>searchData(e.target.value)} 
                        onKeyPress={(e)=>enters(e)}
                        >
                    </input>
                </form>
            </div>
        </div>
    )
}
