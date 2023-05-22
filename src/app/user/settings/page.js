// fetch data on the server side
import { supabase } from "../../../../util/supabaseClient";

export const revalidate = 0

const Settings = async () => {
  let { data } = await supabase.from("talks").select();

  return (
    <div>
      working
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.username}</div>

          </div>
        );
      })}
    </div>
  );
};

export default Settings;
