export async function POST(request:Request){
  try{
    const body=await request.json();
    const question=String(body?.question||"").trim();
    if(!question)return Response.json({error:"Question required."},{status:400});

    const key=process.env.OPENROUTER_API_KEY;
    if(!key)return Response.json({error:"AI is not connected yet. Add OPENROUTER_API_KEY to the deployment environment."},{status:503});

    const response=await fetch("https://openrouter.ai/api/v1/chat/completions",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${key}`,
        "HTTP-Referer":process.env.NEXT_PUBLIC_SITE_URL||"https://vexoraplatform.netlify.app",
        "X-Title":"BEAT — Beat Your Ideas"
      },
      body:JSON.stringify({
        model:process.env.OPENROUTER_MODEL||"openrouter/free",
        messages:[
          {role:"system",content:"You are BEAT AI, a friendly student mentor. Give concise, age-appropriate explanations, encourage curiosity, and help with maths, coding, science, projects and study."},
          {role:"user",content:question}
        ]
      })
    });

    const data=await response.json();
    if(!response.ok)return Response.json({error:data?.error?.message||"AI request failed."},{status:response.status});

    const answer=data?.choices?.[0]?.message?.content;
    return Response.json({answer:answer||"I couldn't generate an answer."});
  }catch(error){
    return Response.json({error:"AI request failed."},{status:500});
  }
}
