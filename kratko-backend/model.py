# Install required libraries (run once)
# pip install transformers torch sentencepiece

from transformers import BartForConditionalGeneration, BartTokenizer

def summarize_text(
    text: str,
    model_name: str = "facebook/bart-large-cnn",
    max_length: int = 150,
    min_length: int = 40,
    length_penalty: float = 2.0,
    num_beams: int = 4
) -> str:
    """
    Summarize input text using a BART transformer.
    """

    # Load tokenizer and model
    tokenizer = BartTokenizer.from_pretrained(model_name)
    model = BartForConditionalGeneration.from_pretrained(model_name)

    # Tokenize input text
    inputs = tokenizer(
        text,
        max_length=1024,
        truncation=True,
        return_tensors="pt"
    )

    # Generate summary
    summary_ids = model.generate(
        inputs["input_ids"],
        max_length=max_length,
        min_length=min_length,
        length_penalty=length_penalty,
        num_beams=num_beams,
        early_stopping=True
    )

    # Decode summary
    summary = tokenizer.decode(
        summary_ids[0],
        skip_special_tokens=True
    )

    return summary


if __name__ == "__main__":
    article = input("Enter the text you want to summarise: ")

    result = summarize_text(article)
    print("Summary:\n", result)
