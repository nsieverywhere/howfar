// import "server-only";
import { supabase } from "../util/supabaseClient";

export const revalidate = 0


export const getPost = async () => {

  let { data } = await supabase.from("post").select();
// let data = "nsikan"


   
    return data;
}