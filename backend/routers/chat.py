from fastapi import APIRouter
from openai import OpenAI
import os

router = APIRouter(tags=["Chat"], prefix="/chat")

@router.get("/")
async def start():
    '''Chatの開始
    '''
    client = OpenAI(
        api_key=os.environ['OPENAI_API_KEY']
    )
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        store=True,
        messages=[
            {"role": "user", "content": "write a haiku about ai"}
        ]
    )
    print(completion.choices[0].message)
    return