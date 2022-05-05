import React from 'react';

const Blogs = () => {
    return (
        <div className='text-start m-5'>
            <div className='my-2'>Hello</div>
            <div className='text-white'>
                <div className='m-3'>
                    <h2>Difference between Javascript and node.js.</h2>
                    <ul>
                        <li>Javascript is a simple programming language that runs in any browser but node.js is a running environment of javascript.</li>
                        <li>Javascript holds a lot of requiring libraries. Node.js also holds a lot relative libraries which we normally use in javascript.</li>
                        <li>javascript is a strong programming language where node.js </li>
                    </ul>
                </div>
                <div className='m-3'>
                    <h2>Difference between SQL and NoSQL.</h2>
                    <ul>
                        <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                        <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                        <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                        <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                        <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                    </ul>
                </div>
                <div className='m-3'>
                    <h2 >What is the purpose of `jwt` and how does it work!</h2>
                    <p>
                    A JSON web token (JWT) is a URL-safe method of transferring claims between two parties.
                    </p>
                    <p>
                    The token is mainly composed of header, payload, signature. These three parts are separated by dots(.). JWT defines the structure of information we are sending from one party to the another, and it comes in two forms – Serialized, Deserialized. The Serialized approach is mainly used to transfer the data through the network with each request and response. While the deserialized approach is used to read and write data to the web token.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;