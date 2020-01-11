import React, { Component } from 'react'

export class Title extends Component {
    state = {
        edit: false,
        displayText: 'Issue tracker for BizAnalytics'
    }
    editText = () => {
        this.setState({...this.state, edit: !this.state.edit })
    }
    changeText = () =>{
        this.setState({edit: !this.state.edit, displayText: this.refs.inputText.value })
    }
    returnText = () => (this.state.edit) ? "Done" : "Edit";

    editView = () => {
        return <div className='ShowDiv'>
            <input
                type='text'
                defaultValue={this.state.displayText}
                ref='inputText'
            />
            <button
                type="button"
                onClick={this.changeText}
            >
                {this.returnText()}
            </button>
        </div>
    }

    defaultView = () => {
        return <div className='ShowDiv'>
            <div className='ShowDiv'>
                {this.state.displayText}
            </div>
            <button
                type="button"
                onClick={this.editText}
            >
                {this.returnText()}
            </button>
        </div>
    }

    render() {
        return this.state.edit ? this.editView() : this.defaultView()
    }
}

export default Title
