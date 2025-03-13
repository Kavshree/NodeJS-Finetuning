import OpenAI from "openai";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const openai = new OpenAI();

const upload = async () => {
    const file = await openai.files.create({
        file: fs.createReadStream("./training_data.jsonl"),
        purpose: 'fine-tune'
    })
    return file;
}

const createFineTune = async(id) => {
    try {
      const model = await openai.fineTuning.jobs.create({
        training_file: id,
        model: 'gpt-3.5-turbo'
      })
      console.log('response: ', model)
    } catch (err) {
      console.log('error: ', err)
    }
}

upload()
.then(upload_response => {
    createFineTune(upload_response.id).then(() => console.log("Success. Finetune Job is in progress. Please check after some time."))
});