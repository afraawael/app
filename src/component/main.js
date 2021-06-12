import React from 'react';
import HornedBeast from './hornedBeast';
import Data from './data.json';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';


class Main extends React.Component {




    render() {

        return (
            <div className='minMain'>

                <CardDeck>

                    <CardColumns>



                        {
                            Data.map((element, index) => {
                                return (<div>
                                    <HornedBeast dataTitle={element.title} prag={element.description} url={element.image_url} keywords={element.keyword} horn={element.horns} />
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
