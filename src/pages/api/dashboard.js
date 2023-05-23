import { supabase } from "../../../util/supabaseClient";


export default async function handler(req, res) {
  const { username } = req.body.params;
  console.log(username)
   let { data } = await supabase.from("post").select().eq('username', username);



  

  res.status(200).json({ data: data });
}


