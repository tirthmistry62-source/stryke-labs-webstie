import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["COMETAPI_KEY"],
    base_url="https://api.cometapi.com/v1",
)

response = client.responses.create(
    model="gpt-6-astra",
    reasoning={"effort": "low"},
    input="Fix this Python function so an empty list returns 0:\n\ndef average(numbers):\n    return sum(numbers) / len(numbers)"
)

print(response.output_text)