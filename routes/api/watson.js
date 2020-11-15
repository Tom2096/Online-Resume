const express = require("express");
const router = express.Router();

const AssistantV2 = require("ibm-watson/assistant/v2");
const {IamAuthenticator} = require("ibm-watson/auth");

const assistant = new AssistantV2({
    version: "2020-11-03",
    authenticator: new IamAuthenticator({
        apikey: process.env.WATSON_ASSISTANT_APIKEY,
    }),
    serviceUrl: process.env.WATSON_ASSISTANT_URL,
})

router.get("/session", async (req, res) => {
    try{
        const session = await assistant.createSession({
            assistantId: process.env.WATSON_ASSISTANT_ID,
        })
        res.json(session["result"]);
    } catch (err) {
        res.send("There was an error processing your request.");
        console.log(err);
    }
})

router.post("/message", async (req, res) => {

    payload = {
        assistantId: process.env.WATSON_ASSISTANT_ID,
        sessionId: req.headers.session_id,
        input: {
            message_type: "text",
            text: req.body.input,
        },
    }

    try{
        const message = await assistant.message(payload);
        res.json(message["result"]);
    } catch (err) {
        res.send("There was an error processing your request.");
        console.log(err);
        console.log(req.headers.session_id);
    }
})


module.exports = router;