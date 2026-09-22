export async function POST(request:Request){
  try{
    const body=await request.json();
    const question=String(body?.question||"").trim();
    if(!question)return Response.json({error:"Question required."},{status:400});
    const key=process.env.OPENAI_API_KEY;
    if(!key)return Response.json({error:"AI is not connected yet. Add OPENAI_API_KEY to the deployment environment."},{status:503});
    const response=await fetch("https://api.openai.com/v1/responses",{
      method:"POST",
      headers:{"Content-Type":"application/json","Authorization":`Bearer ${key}`},
      body:JSON.stringify({model:process.env.OPENAI_MODEL||"gpt-5.6-luna",input:[{role:"system",content:"You are BEAT AI, a friendly student mentor. Give concise, age-appropriate explanations, encourage curiosity, and help with maths, coding, science, projects and study."},{role:"user",content:question}]})
    });
    const data=await response.json();
    if(!response.ok)return Response.json({error:data?.error?.message||"AI request failed."},{status:response.status});
    return Response.json({answer:data.output_text||"I couldn't generate an answer."});
  }catch(error){return Response.json({error:"AI request failed."},{status:500});}
}
