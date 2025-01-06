from fastapi import APIRouter
from openai import OpenAI
from anthropic import Anthropic
import os
from dotenv import load_dotenv

load_dotenv()

openaiClient = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY")
)
anthropicClient = Anthropic(
    api_key=os.environ.get("ANTHROPIC_API_KEY")
)   

router = APIRouter(tags=["Chat"], prefix="/chat")

@router.get("/")
async def start():
    '''Chatの開始
    '''
    
    try :
        completion = openaiClient.chat.completions.create(
            model="gpt-4o-mini",
            store=True,
            messages=[
                {"role": "user", "content": "write a haiku about ai"}
            ]
        )
        print(completion.choices[0].message)
    
        message = anthropicClient.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=1024,
            messages=[
                {"role": "user", "content": "Hello, Claude"}
            ]
        )
        print(message.content)
        return
    except Exception as e:
        print(e)
        return