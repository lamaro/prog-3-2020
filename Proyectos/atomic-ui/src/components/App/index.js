import React from 'react';
import Button from '../Button'
import Div from '../Div'
import { Grid, Col } from '../Grid'
import { Inner } from '../Inner'
import { Input } from '../Input'

function App() {
    return (
        <>
            <Inner>
                <Div margin={90}>HELLO STYLED F**** COMPONENTS</Div>
            </Inner>

            <Div margin={90}>
                <div className="highlight">
                    Texto destacado
                </div>
            </Div>

            <Inner>

                <button>Ugly Button</button>
                <Button
                    primary={true}
                >
                    Push me!
            </Button>
                <Button
                    primary={false}
                >
                    And then just hold me!
            </Button>
                <Button
                    primary={true}
                >
                    And then just hold me!
            </Button>

                <h1>MI GRILLA</h1>

                <Grid colGap={30} rowGap={40}>
                    <Col desktop={3} tablet={6} mobile={12}>
                        Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                    </Col>
                    <Col desktop={3} tablet={6} mobile={12}>
                        Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                    </Col>
                    <Col desktop={3} tablet={6} mobile={12}>
                        Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                    </Col>
                    <Col desktop={3} tablet={6} mobile={12}>
                        Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                    </Col>
                </Grid>

            </Inner>

            <Input type="text" placeholder="email" />
        </>
    );
}

export default App;