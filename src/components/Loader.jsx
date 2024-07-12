import { Blocks } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <Blocks
        height="120"
        width="120"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </>
  );
}
