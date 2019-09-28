import React,{Component} from "react";
import{connect} from "react-redux";
import "./App.css";
import ToDo from "./compornents/ToDo";
import AddForm from "./compornents/AddForm";
import FindForm from "./compornents/FindForm";
import DelForm from "./compornents/DelForm";
import PersistForm from "./compornents/PersistForm";

//Appコンポーネント
class App extends Component{
    td={
        width:"250px"
    }

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>やることリスト</h1>
                <AddForm />
                <hr />
                <table><tbody><tr>
                    <td style={this.td}><FindForm /></td>
                    <td style={this.td}><DelForm /></td>
                    <td style={this.td}><PersistForm /></td>
                    </tr></tbody></table>
                    <ToDo />
            </div>
        );
    }
}

export default connect()(App);