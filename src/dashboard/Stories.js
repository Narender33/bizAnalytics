import React, { Component } from 'react';
import Story from './Story';
import Proptypes from 'prop-types'

class Stories extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th className='Width10'> ID </th>
                        <th className='Width60'> Description </th>
                        <th className='Width30'> Status </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.stories.value.map(story => (
                        <Story key={story.id} story={story} options={this.props.stories.options} />
                    ))}
                </tbody>
            </table>
        );
    }
}

Stories.prototypes = {
    stories: Proptypes.array.isRequired
}

export default Stories;
