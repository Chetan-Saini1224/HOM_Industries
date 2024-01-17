import { Schema,model,models } from "mongoose";

const messageSchema = new Schema({
    message : {
        type: String,
        required : true,
    },
    number: {
       type : String,   
       required : true,
    }
});

const Messages = models.Messages || model('Messages',messageSchema);

export default Messages;