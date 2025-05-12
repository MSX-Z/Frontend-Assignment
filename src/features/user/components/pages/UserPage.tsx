import ReactJson from "react-json-view";
import useUser from "@/features/user/hooks/useUser";
function UserPage() {
  const { loading, error, data } = useUser();
  return (
    <div className="p-10 overflow-hidden h-screen">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <ReactJson src={data} theme="codeschool" style={{height: "100%", overflowY: "auto"}}/>}
    </div>
  );
}

export default UserPage;
