from fastapi import APIRouter
from openai import OpenAI
from anthropic import Anthropic
import os
from dotenv import load_dotenv

load_dotenv()

openaiClient = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY")
)
deepseekClient = OpenAI(
    api_key=os.environ.get("DEEP_SEEK_API_KEY"),
    base_url="https://api.deepseek.com"
)
anthropicClient = Anthropic(
    api_key=os.environ.get("ANTHROPIC_API_KEY")
)   

router = APIRouter(tags=["Chat"], prefix="/chat")

@router.get("/")
async def start():
    '''Chatの開始
    '''
    
    messages = [
        {"role": "system", "content": "あなたは優秀なアシスタントです。"},
        {"role": "user", "content": "こんにちは"},
    ]
    
    try :
        # OpenAIの場合
        # completion = openaiClient.chat.completions.create(
        #     model="gpt-4o-mini",
        #     messages=messages
        # )
        # print(completion.choices[0].message)
        
        # DeepSeekの場合
        completion2 = deepseekClient.chat.completions.create(
            model="deepseek-chat",
            messages=messages
        )
        print(completion2.choices[0].message)
    
        # Caludeの場合
        # message = anthropicClient.messages.create(
        #     model="claude-3-5-sonnet-20241022",
        #     messages=messages
        # )
        # print(message.content)
        return
    except Exception as e:
        print(e)
        return