import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div>
            <h2>Expected Quesctions</h2>
            <Accordion className='w-75 container mt-5' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the perpouse the website?</Accordion.Header>
                    <Accordion.Body>
                        The Website is created for online education perpouse
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Is this website do business?</Accordion.Header>
                    <Accordion.Body>
                        Yes! This is a business website also, But we provide some free courses sometimes based on the Students Analytics
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Is this website provide studends any scholership?</Accordion.Header>
                    <Accordion.Body>
                        Yes, We Provide 100 + scholership to our students based on Inteligence and poority
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Faq;