
import React from 'react';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numVotes: 0
        };
    }


    voting = () => {
        this.setState({
            numVotes: this.state.numVotes + 1

        });
    }

    render() {
        return (
            <div className='Honer'>
          

                <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" onClick={this.voting} alt={this.props.alt} src={this.props.url} />
    <Card.Body>
        <Card.Title>{this.props.dataTitle}</Card.Title>
        <Card.Text>   {this.props.prag}   </Card.Text>
        <Card.Text> Number of votes: {this.state.numVotes}</Card.Text>
                 </Card.Body>        </Card>


            </div>

        );
    }
}
export default HornedBeast;



