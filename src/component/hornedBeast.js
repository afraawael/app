
import React from 'react';


class HornedBeast extends React.Component {
    render() {
        return (
            <div className='Honer'>
                <h2> {this.props.titel}</h2>
                <p>{this.props.prag}</p>
                <img src={this.props.url} alt={this.props.alt} />

            </div>

        );
    }
}
export default HornedBeast;
