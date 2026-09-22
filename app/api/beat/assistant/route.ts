export async function POST(request:Request){
  try{
    const body=await request.json();
    const question=String(body?.question||"").trim();
    if(!question)return Response.json({error:"Question required."},{status:400});

    const key=process.env.OPENROUTER_API_KEY?.trim();
    if(!key)return Response.json({error:"AI is not connected yet. Add OPENROUTER_API_KEY to the deployment environment."},{status:503});

    const model=process.env.OPENROUTER_MODEL?.trim()||"openai/gpt-oss-120b:free";

    let response:Response;
    try{
      response=await fetch("https://openrouter.ai/api/v1/chat/completions",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${key}`,
          "X-Title":"BEAT - Beat Your Ideas"
        },
        body:JSON.stringify({
          model,
          messages:[
            {role:"system",content:"You are BEAT AI, a friendly student mentor. Give concise, age-appropriate explanations, encourage curiosity, and help with maths, coding, science, projects and study."},
            {role:"user",content:question}
          ],
          max_tokens:600
        }),
        signal:AbortSignal.timeout(30000)
      });
    }catch(error){
      const message=error instanceof Error?error.message:"Unknown network error";
      return Response.json({error:`Could not reach OpenRouter: ${message}`},{status:502});
    }

    const raw=await response.text();
    let data:any={};
    try{data=raw?JSON.parse(raw):{};}catch{data={raw};}

    if(!response.ok){
      const upstream=data?.error?.message||data?.message||data?.raw||`OpenRouter returned HTTP ${response.status}`;
      return Response.json({
        error:`OpenRouter ${response.status}: ${upstream}`,
        provider:"OpenRouter",
        model
      },{status:502});
    }

    const answer=data?.choices?.[0]?.message?.content;
    if(!answer){
      return Response.json({
        error:"OpenRouter returned no text response.",
        provider:"OpenRouter",
        model,
        finish_reason:data?.choices?.[0]?.finish_reason||null
      },{status:502});
    }

    return Response.json({answer,provider:"OpenRouter",model});
  }catch(error){
    const message=error instanceof Error?error.message:"Unknown server error";
    return Response.json({error:`BEAT AI server error: ${message}`},{status:500});
  }
}
