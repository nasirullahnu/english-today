import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h2 className='bg-success text-white p-2'>Quesctions for everyone</h2>
            <div className='border border-dark mb-5 p-4'>
                <p className='bg-primary bg-gradient text-white p-2'>What is "Cors"?</p>
                <p>CORS is a way to whitelist requests to your web server from certain locations, by specifying response headers like 'Access-Control-Allow-Origin'. It's an important protocol for making cross-domain requests possible, in cases where there's a legitimate need to do so.</p>
            </div>
            <div className='border border-dark mb-5 p-4'>
                <p className='bg-primary bg-gradient text-white p-2'>Why did we use Firebase? What can be used other than Firebase?</p>
                <p className={'mb-3'}>
                    <small>
                        We use "firebase" for ...
                    </small><br></br>
                    1. Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.
                </p><hr></hr>
                <p>
                    <small>
                        The best Firebase alternatives
                    </small><br></br>
                    Back4App, Backendless, Kuzzle, Pubnub, Kumulos, Appwrite, Deployd, NHost
                </p>
            </div>
            <div className='border border-dark mb-5 p-4'>
                <p className='bg-primary bg-gradient text-white p-2'>How "Private Router" works in React Router DOM</p>
                <p>
                    The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                </p>
            </div>
            <div className='border border-dark mb-5 p-4'>
                <p className='bg-primary bg-gradient text-white p-2'>What is NODE? And how NODE is Work?</p>
                <p className={'mb-3'}>
                    <small>
                        NODE is ...
                    </small><br></br>
                    a JavaScript runtime built on Chrome's V8 JavaScript engine.
                </p><hr></hr>
                <p>
                    <small>
                        Working method of NODE is ...
                    </small><br></br>
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.s
                </p>
            </div>
        </div>
    );
};

export default Blog;