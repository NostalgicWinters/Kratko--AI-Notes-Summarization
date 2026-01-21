from fastapi import FastAPI
from pydantic import BaseModel
from transformers import BartTokenizer, BartForConditionalGeneration
import torch

app = FastAPI(title="BART Text Summarization API")

# Load model once at startup (IMPORTANT for performance)
MODEL_NAME = "facebook/bart-large-cnn"
tokenizer = BartTokenizer.from_pretrained(MODEL_NAME)
model = BartForConditionalGeneration.from_pretrained(MODEL_NAME)
model.eval()

class SummarizeRequest(BaseModel):
    text: str
    max_length: int = 150
    min_length: int = 40

class SummarizeResponse(BaseModel):
    summary: str

@app.post("/summarize", response_model=SummarizeResponse)
def summarize(req: SummarizeRequest):
    inputs = tokenizer(
        req.text,
        return_tensors="pt",
        truncation=True,
        max_length=1024
    )

    with torch.no_grad():
        summary_ids = model.generate(
            inputs["input_ids"],
            max_length=req.max_length,
            min_length=req.min_length,
            num_beams=4,
            length_penalty=2.0,
            early_stopping=True
        )

    summary = tokenizer.decode(
        summary_ids[0],
        skip_special_tokens=True
    )

    return {"summary": summary}
