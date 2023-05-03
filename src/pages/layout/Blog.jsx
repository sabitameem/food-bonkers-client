import React from "react";
import PDFpage from "./PDFpage";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Blog = () => {
  return (
    <div>
      <h3 className="d-flex mt-3 justify-content-around">
        <span className="fs-3 fw-semibold">Blog Page</span>
        <PDFDownloadLink document={<PDFpage />} fileName="my-document.pdf">
          Download PDF
        </PDFDownloadLink>
      </h3>
      <div className="container">
        <h4 className="fs-4 lg:fs-3 mt-3 ">
          Tell us the differences between uncontrolled and controlled
          components.
        </h4>
        <h5 className="fs-6 lg:fs-5 mb-2">
          Controlled components manage input data through their own state, while
          uncontrolled components rely on the DOM to manage input data.
          Controlled components provide more control and flexibility, while
          uncontrolled components are simpler and easier to use for basic forms.
        </h5>
      
      <h4 className="fs-4 lg:fs-3 mt-3">
        How to validate React props using PropTypes
      </h4>
      <h5 className="fs-6 lg:fs-5 mb-2">
        PropTypes is a package used in React to validate props passed to
        components. You can define propTypes as a static property in your
        component and use the PropTypes package to specify the expected type and
        other constraints for each prop.
      </h5>
      <h4 className="fs-4 lg:fs-3 mt-3">
        Tell us the difference between nodejs and express js.
      </h4>
      <h5 className="fs-6 lg:fs-5 mb-2">
        Node.js is a runtime environment that executes JavaScript code outside
        of a web browser. It is built on the V8 JavaScript engine and allows
        developers to run JavaScript on the server-side. Node.js provides a set
        of built-in modules and APIs for building server-side applications.
        Express.js, on the other hand, is a web application framework built on
        top of Node.js. It provides a set of tools and utilities for building
        web applications, such as middleware for handling HTTP requests and
        responses, routing, and template engines. Express.js makes it easier to
        build web applications by abstracting away some of the low-level details
        of handling HTTP requests and responses. In summary, Node.js provides a
        runtime environment for executing JavaScript on the server-side, while
        Express.js provides a framework for building web applications using
        Node.js.
      </h5>
      <h4 className="fs-4 lg:fs-3 mt-3">
        What is a custom hook, and why will you create a custom hook?
      </h4>
      <h5 className="fs-6 lg:fs-5 mb-2">
        In React, a custom hook is a function that encapsulates a specific set
        of functionality that can be reused across multiple components. Custom
        hooks allow you to abstract away complex logic into a reusable and
        composable function. You might create a custom hook to encapsulate logic
        that is used in multiple components or to provide a specific piece of
        functionality that is not available through the built-in React hooks.
        For example, you could create a custom hook that fetches data from an
        API and provides error handling and caching. Custom hooks follow a
        naming convention of starting with the word "use" followed by the
        functionality they provide. This is because they can be used just like
        the built-in React hooks, such as useState and useEffect. Creating a
        custom hook involves defining a function that returns an array or object
        with the required state and functions. You can then use this custom hook
        in any component that needs the functionality provided by the hook.
        Using custom hooks can lead to more reusable and maintainable code, as
        well as easier testing and debugging. Additionally, custom hooks can
        help to reduce the amount of code duplication in your React projects.
      </h5>
      </div>
    </div>
  );
};

export default Blog;
