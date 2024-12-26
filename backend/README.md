# backend


## 環境構築
```
conda create -n medical_ai_chat_env python=3.12
conda activate medical_ai_chat_env
conda env list
```

## 動作確認
```
$ pip install -r requirements.txt
$ uvicorn main:app --reload
$ curl http://127.0.0.1:8000
$ open http://127.0.0.1:8000/docs
```
