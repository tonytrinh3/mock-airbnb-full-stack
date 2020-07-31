import React from "react";

class Little extends React.Component{
    constructor(props){

    
        super(props);

        this.click = this.click.bind(this)
      
    }

    state = {
        dog: this.props.test
    }

    click(){
        this.setState({
            dog: "i am a changed man"
        })
        // console.log("aewf")
    }

    render(){
        console.log(this.props.test);
      
        return(
            <div className="awef">
                {this.props.test}
                <br/>
                {this.state.dog}
                
                <br/>
                <button className="awef" onClick = {this.click}> click me</button>
            </div>
        )
    }
}

export default Little;