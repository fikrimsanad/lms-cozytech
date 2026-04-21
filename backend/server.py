from fastapi import FastAPI, Request
from fastapi.responses import Response
import httpx

app = FastAPI()

NEXTJS_URL = "http://localhost:3000"

@app.api_route("/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"])
async def proxy_to_nextjs(request: Request, path: str):
    url = f"{NEXTJS_URL}/{path}"
    
    headers = {}
    for key, value in request.headers.items():
        if key.lower() not in ("host", "content-length"):
            headers[key] = value
    
    async with httpx.AsyncClient() as client:
        response = await client.request(
            method=request.method,
            url=url,
            headers=headers,
            content=await request.body(),
            params=request.query_params,
            follow_redirects=False,
            timeout=30.0,
        )
    
    # Build response, preserving ALL set-cookie headers
    resp = Response(
        content=response.content,
        status_code=response.status_code,
    )
    
    for key, value in response.headers.multi_items():
        k = key.lower()
        if k in ("content-encoding", "transfer-encoding", "content-length"):
            continue
        resp.headers.append(key, value)
    
    return resp
