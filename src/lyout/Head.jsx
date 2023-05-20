import { Helmet } from "react-helmet";
const Head = ({ title }) => {
  return (
    <Helmet>
      <title>Iyad Shop - {title}</title>
    </Helmet>
  );
};

export default Head;
