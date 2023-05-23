// fetch data on the server side
import { supabase } from "../../../../util/supabaseClient";

export const revalidate = 0

const Settings = async () => {
  let { data } = await supabase.from("talks").select();

  return (
    <div>
      working
      {data.map((item) => {
        return <div>{item.name}</div>
      })}
        
    </div>
  );
};

export default Settings;
