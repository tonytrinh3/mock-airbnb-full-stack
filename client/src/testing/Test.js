import React from "react";

import Little from './Little';


class Test extends React.Component{
   

    render(){
        return(
            <div className="awef">
                <Little test = {"you dont need constructor"}/>
            </div>
        )
    }
}

export default Test;