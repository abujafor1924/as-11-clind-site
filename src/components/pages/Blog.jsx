import useTitle from "../../hook/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="p-4">
      <div>
        <h1 className="text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p>
          An access token is a credential that is issued by an authentication
          server to a client application after successful authentication.A
          refresh token is a long-lived credential that is also issued by the
          authentication server during the initial authentication process.
          Access tokens and refresh tokens can be stored in the clients browser
          using the Web Storage API, such as local storage or session storage.
        </p>
      </div>
      <div>
        <h1 className="text-xl font-medium">
          Compare SQL and NoSQL databases?
        </h1>
        <p>
          SQL (Structured Query Language) and NoSQL (Not Only SQL) are two broad
          categories of database management systems,
        </p>
      </div>
      <div>
        <h1 className="text-xl font-medium">
          What is express js? What is Next JS?
        </h1>
        <p>
          Express.js is a popular web application framework for Node.js.next js
          is a progressive Node.js framework built with TypeScript.
        </p>
      </div>
      <div>
        <h1 className="text-xl font-medium">
          What is MongoDB aggregate and how does it work?
        </h1>
        <p>
          In MongoDB, the aggregate operation is used to perform advanced data
          aggregation and processing tasks on collections. It allows you to
          process and transform data within MongoDB, combining multiple stages
          of operations to perform complex aggregations.
        </p>
      </div>
    </div>
  );
};

export default Blog;
