import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.DJANGO_API_URL?.replace(/\/$/, "");

async function handler(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  if (!API_URL) {
    return NextResponse.json(
      { detail: "DJANGO_API_URL is not configured on this deployment." },
      { status: 503 }
    );
  }

  const { path } = await context.params;
  const target = `${API_URL}/api/${path.join("/")}${request.nextUrl.search}`;

  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.delete("content-length");

  const authorization = request.headers.get("authorization");
  if (authorization) headers.set("authorization", authorization);

  const body = ["GET", "HEAD"].includes(request.method) ? undefined : await request.arrayBuffer();

  const upstream = await fetch(target, {
    method: request.method,
    headers,
    body,
    cache: "no-store",
  });

  const responseHeaders = new Headers(upstream.headers);
  responseHeaders.delete("content-encoding");
  responseHeaders.delete("content-length");

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
export const OPTIONS = handler;
