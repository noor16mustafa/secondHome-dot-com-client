import React from 'react';

const Blog = () => {
    return (
        <div className='my-14 mx-14'>
            <div>
                <div className='bg-gray-500'>
                    <h1 className='text-3xl font-bold text-black p-4 text-center'>
                        What are the different ways to manage a state in React Application?</h1>
                </div>
                <div className='bg-gray-400 p-4'>
                    <p>There are four main types of state you need to properly manage in your React apps:
                        <br></br>
                        1. Local State:  Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).
                        <br></br>
                        2.Global (UI) state : Global state is data we manage across multiple components.
                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                        <br></br>
                        3.Server state: can be deceptively challenging to manage.

                        At first, it seems you just need to fetch data and display it in the page. But then you need to display a loading spinner while you are waiting for the data. Then you need to handle errors and display them to the user as they arise.
                        <br>
                        </br>
                        4.URL state : Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                    </p>
                </div>
            </div>
            <div>
                <div className='bg-gray-500'>
                    <h1 className='text-3xl font-bold text-black p-4 text-center'>
                        How does prototypal inheritance works?</h1>
                </div>
                <div className='bg-gray-400 p-4'>
                    <p>Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword 'class' and 'inheritance'.

                        Javascript's version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar. There are differences in its keyword, syntax, and how it works.
                        So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.

                    </p>
                </div>
            </div>
            <div>
                <div className='bg-gray-500'>
                    <h1 className='text-3xl font-bold text-black p-4 text-center'>
                        What is unit test? why should we write unit test?</h1>
                </div>
                <div className='bg-gray-400 p-4'>
                    <p>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class. <br></br>
                        There are two types of unit testing:

                        1. Manual: As the name implies, unit tests are run manually to verify the correctness of your code. This is done before writing automated tests. Its drawback is that you have to manually test your functions/classes whenever you make changes to them.
                        2. Automated: This is the preferred unit testing method as it can be carried out by simply running a script. Automated tests also make it easier to run tests when your application scales.
                        <br></br>
                        <strong>Why we need unit testing?</strong>
                        <br></br>
                        To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:
                        <br />
                        -Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could've been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                        <br></br>
                        -Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                        It simplifies the debugging process.
                        <br></br>
                        -Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                        <br />
                        -Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                        <br />
                        -Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.

                    </p>
                </div>
            </div>
            <div>
                <div className='bg-gray-500'>
                    <h1 className='text-3xl font-bold text-black p-4 text-center'>
                        React Vs Angular Vs Vue</h1>
                </div>
                <div className='bg-gray-400 p-4'>
                    <p>
                        <strong>Angular</strong> is the most mature of the frameworks, has good backing in terms of contributors and is a complete package.

                        However, the learning curve is steep and concepts of development in Angular may put off new developers.

                        Angular is a good choice for companies with large teams and developers who already use TypeScript.
                        <br />
                        <strong>React</strong> is just old enough to be mature and has a huge number of contributions from the community. It has gained widespread acceptance. The job market for React is really good, and the future for this framework looks bright.

                        React looks like a good choice for someone getting started with front-end JavaScript frameworks, startups, and developers who like some flexibility. The ability to integrate with other frameworks seamlessly gives it a great advantage for those who would like some flexibility in their code.
                        <br />
                        <strong>Vue</strong> is newest to the arena, without the backing of a major company.

                        However, it has done really well in the last few years to come out as a strong competitor for Angular and React, and especially so with the release of Vue 3.0. This is perhaps playing a role with a lot of Chinese giants like Alibaba and Baidu picking Vue as their primary front-end JavaScript framework. Vue should be your choice if you prefer simplicity, but also like flexibility.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;