import React, {Component} from "react";
import {connect} from "react-redux";


import Item from "./Item";

class Todos extends Component{

    render(){
        let todo;
        let todoNumber=0;
        switch (this.props.mode){
            case"default":
            todo=this.props.todo.map((value)=>(
                <Item key={value.message} 
                      value={value} 
                      index={todoNumber++} 
                      />
            ));
            break;

            case"find":
            todo=this.props.ftodo.map((value)=>(
                <Item key={value.message} 
                      value={value} 
                      index={todoNumber++} 
                      />
            ));
            break;

            case"delete":
            todo=this.props.todo.map((value)=>(
                <Item key={value.message} 
                      value={value} 
                      index={todoNumber++} 
                      />
            ));
            break;

            default:
                todo=this.props.todo.map((value)=>(
                    <Item key={value.message} 
                          value={value} 
                          index={todoNumber++} 
                          />
                ));
        }

        return (
            <table><tbody>{todo}</tbody></table>
        );
    }
}

export default connect((state)=>state)(Todos);