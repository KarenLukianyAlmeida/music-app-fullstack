import { useContext } from "react";
import Context from "../context/Context";

function Search() {

  const { user } = useContext(Context);

  return (
    <>
      <h1>Olá, { user }</h1>
    </>
  )
}

export default Search;