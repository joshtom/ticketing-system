import { useParams } from "react-router-dom";

function Show() {
  let { id } = useParams();
  return (
    <>
      <h1>Shows Page: id {id} </h1>
    </>
  );
}

export default Show;
