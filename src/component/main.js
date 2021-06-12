import React from 'react';
import HornedBeast from './hornedBeast';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';
import SelectedBeast from './SelectedBeast';

class Main extends React.Component {




    render() {

        return (
            <div className='minMain'>

                <CardDeck>

                    <CardColumns>



                        {
                            this.props.data.map((element, index) => {
                                return (<div>
                                    <HornedBeast dataTitle={element.title} prag={element.description} url={element.image_url} keywords={element.keyword} horn={element.horns} 
                                     modal={this.props.modal}
                                     close={this.props.close}
                                     />
                                   

                                </div>


                                );


                            })
                        }

                    </CardColumns>
                </CardDeck>


            </div>
        );

    }

}
export default Main;
