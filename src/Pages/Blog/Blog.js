import { Typography } from '@material-tailwind/react';
import React from 'react';

const Blog = () => {
    return (
        <section className='block md:mx-5 md:my-5 mx-1 my-4 p-6 rounded-lg shadow-lg bg-neutral-100 md:max-w-full'>
            <div className="flex flex-col justify-start w-full">
                <Typography className="text-neutral-600 md:text-xl text-lg font-semibold">Difference between SQL and NoSQL?</Typography>
                <Typography className="text-neutral-500 font-medium"><span className='md:text-xl text-lg'>Ans: </span>
                <span className='md:text-lg text-base'>SQL: RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). 
                These databases have fixed or static or predefined schema. 
                These databases are not suited for hierarchical data storage. 
                These databases are best suited for complex queries. 
                Vertically Scalable. Follows ACID property.</span>
                <br />
                <span className='md:text-lg text-base'>NoSQL: Non-relational or distributed database system. 
                They have dynamic schema. 
                These databases are best suited for hierarchical data storage. 
                These databases are not so good for complex queries. 
                Horizontally scalable. Follows CAP.</span></Typography>
            </div>
            <div className="flex flex-col justify-start w-full my-4">
                <Typography className="text-neutral-600 md:text-xl text-lg font-semibold">What is JWT, and how does it work?</Typography>
                <Typography className="text-neutral-500 md:text-lg text-base font-medium"><span className='md:text-xl text-lg'>Ans: </span><span className='md:text-lg text-base'>A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange.The token is mainly composed of header, payload, signature. These three parts are separated by dots(.). JWT defines the structure of information we are sending from one party to the another, and it comes in two forms – Serialized, Deserialized. The Serialized approach is mainly used to transfer the data through the network with each request and response. While the deserialized approach is used to read and write data to the web token.</span></Typography>
            </div>
            <div className="flex flex-col justify-start w-full">
                <Typography className="text-neutral-600 md:text-xl text-lg font-semibold">What is the difference between javascript and NodeJS?</Typography>
                <Typography className="text-neutral-500 md:text-lg text-base font-medium"><span className='md:text-xl text-lg'>Ans: </span><span className='md:text-lg text-base'>Javascript: Javascript is a programming language that is used for writing scripts on the website. 
                Javascript can only be run in the browsers. 
                It is basically used on the client-side. 
                Javascript is capable enough to add HTML and play with the DOM. 
                Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. 
                Javascript is used in frontend development. 
                Some of the javascript frameworks are RamdaJS, TypedJS, etc.</span>
                <br />
                <span className='md:text-lg text-base'>NodeJS: NodeJS is a Javascript runtime environment. 
                We can run Javascript outside the browser with the help of NodeJS. 
                It is mostly used on the server-side. 
                Nodejs does not have capability to add HTML tags. 
                V8 is the Javascript engine inside of node.js that parses and runs Javascript. 
                Nodejs is used in server-side development. 
                Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. 
                Nodejs is written in C, C++ and Javascript.</span></Typography>
            </div>
            <div className="flex flex-col justify-start w-full mt-4">
                <Typography className="text-neutral-600 md:text-xl text-lg font-semibold">How does NodeJS handle multiple requests at the same time?</Typography>
                <Typography className="text-neutral-500 md:text-lg text-base font-medium"><span className='md:text-xl text-lg'>Ans: </span><span className='md:text-lg text-base'>NodeJS receives multiple client requests and places them into EventQueue. 
                NodeJS is built with the concept of event-driven architecture. 
                NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</span>
                <br />
                <span className='md:text-lg text-base'>NodeJs uses two concepts- 
                Non-blocking I/O and Asynchronous</span>
                <br />
                <span className='md:text-lg text-base'>Whenever a client sends a request the single thread will send that request to someone else. 
                The current thread will not be busy working with that request. 
                There are workers working for the server. 
                The server sends the request to the worker, the worker further sends it to the other server and waits for the response. 
                In the meantime if there is another request the thread will send it to another worker and the worker will wait for the response from the another server.</span>
                </Typography>
            </div>
        </section>
    );
};

export default Blog;