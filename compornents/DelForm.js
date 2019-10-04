import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "./Store";

class DelForm extends Component {
    input = {
        fontSize: "14pt",
        color: "#006",
        padding: "0px 1px 0px",
        margin: "5px 0px"
    }
    btn = {
        fontSize: "14pt",
        color: "#006",
        padding: "1px 10px"
    }

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e) {
        this.setState({
            number: e.target.value
        });
    }

    doAction(e) {
        e.preventDefault();
        let action = deleteTodo(this.state.number);
        this.props.dispatch(action);
        this.setState({
            number: 0
        });
    }

    render() {
        let n = 0;
        let items = this.props.todo.map((value) => (
            <option key={n} value={n++}>{value.message.substring(0, 10)}
            </option>
        ));
        return (
            <div>
                <form onSubmit={this.doAction}>
                    <select onChange={this.doChange}
                        defaultValue="-1" style={this.input}>
                        {items}
                    </select>
                    <input type="submit" style={this.btn} value="削除" />
                </form>
            </div>
        );
    }
}
export default connect((state) => state)(DelForm);