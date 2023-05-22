import TestComponent from "../../../../component/testcomponent";
import { myData } from "../../../../lib/mydata";

const Dashboard = async () => {
  const data = await myData();

  return <div>{data}</div>;
};

export default Dashboard;
