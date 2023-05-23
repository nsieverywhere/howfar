import { supabase } from "../../../util/supabaseClient";


export default async function handler(req, res) {
  const { username } = JSON.parse(req.body);

  let { data } = await supabase.from("post").select();


  res.status(200).json({ data: data });
}


