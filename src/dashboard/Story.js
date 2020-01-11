import React, { Component } from 'react';
import Proptypes from 'prop-types'

export class Story extends Component {
    state = {
        status: '',

    }
    classes = {
        'Not started': 'Not_started',
        'In progress': 'In_progress',
        'Done': 'Done'
    }
     componentDidMount(){
        this.setState({status: this.props.story.status})
      }

    handleChange = event =>{
        this.setState({...this.state,status: event.target.value})
    }
    render() {
        return (
            <tr className={this.classes[this.state.status]}>
                <td>{this.props.story.id}</td>
                <td>{this.props.story.title}</td>
                <td>
                    <select  onChange={this.handleChange} value={this.state.status}>
                        {this.props.options.map(op => (
                            <option 
                            key={op} 
                            value={op}
                            >
                            {op}
                            </option>
                        ))}
                    </select>
                </td>
            </tr>
        )
    }
}

Story.prototypes = {
    story : Proptypes.object.isRequired
}

export default Story
