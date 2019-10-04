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
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>やることリスト</h1>
                <AddForm />
                <td className="Find" style={this.td}><FindForm /></td>
                    <td className="Del" style={this.td}><DelForm /></td>
                    <td className="Persist" style={this.td}><PersistForm /></td>
                <hr />
                <table><tbody><tr>
                    

                    </tr></tbody></table>
                    <ToDo />
            </div>
        );
    }
}

export default connect()(App);