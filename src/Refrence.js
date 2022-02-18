import React, {Component} from "react";
class Refrence extends Component{
    constructor(props)
    {
        super(props);
        this.inputRef = React.createRef();
        this.CallByRef = null;
        this.setCallByRef = (Element) =>{this.CallByRef=Element}
    }
    componentDidMount()
    {
        this.inputRef.current.focus()
        console.log(this,this.inputRef)
        if(this.CallByRef)
        {
            this.CallByRef.focus();
        }
    }
    clickHandle = ()=>{
        alert(this.inputRef.current.value)
    }
    render()
    {
        return(
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCallByRef} />
                <button onClick={this.clickHandle}>click here</button>
            </div>
        );
    }
}

export default Refrence;
