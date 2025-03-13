# JavaScript Insurance App LLM Finetuning

This project is a Node.js application that uploads a training dataset to OpenAI for fine-tuning a model. The fine-tuning job is initiated via the OpenAI API.

This app is designed to fine-tune a language model (GPT-3.5-turbo) to act as an insurance chatbot. It uploads an insurance-specific training dataset (stored in `training_data.jsonl`) to OpenAI and then initiates a fine-tuning job using that file. The resulting model is focused on answering insurance-related questions while filtering out unrelated topics. The main functionality is implemented in index.js

![chan-insurance](https://github.com/user-attachments/assets/1fb12ecb-4305-4ed8-b8cb-0aa0807bd3e6)

## Project Structure

- **.env** - (To be created one for yourself after you clone) Contains environment variables like the OpenAI API key.
- **.gitignore** - Excludes `node_modules` and the `.env` file.
- **index.js** - Main application file (see code snippet below).
- **package.json** - Contains project metadata and dependencies.
- **training_data.jsonl** - Training dataset in JSON Lines format.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- An OpenAI API key. Obtain one from the [OpenAI website](https://platform.openai.com/).

## Setup

1. Clone the repository.
2. Install dependencies by running:
   ```sh
   npm install
3. Create a .env file in the root directory and add your OpenAI API key: OPENAI_API_KEY="your_openai_api_key_here"

## Usage
To start the fine-tuning process, run the following command in your terminal:
node index.js

## The application will:

Upload your training file (training_data.jsonl) to OpenAI.
Initiate a fine-tuning job using the uploaded file.
Log responses to the terminal, allowing you to track the job's status.

