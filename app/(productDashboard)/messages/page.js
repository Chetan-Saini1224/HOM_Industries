import { connectToDB } from "@/utils/database"
import Message from "@/models/message"
import MessageCard from "@/components/MessageCard"

const getData = async () => {
    try{
        await connectToDB()
        const message = await Message.find({});
        return message;
    }
    catch(err){
        return {error:"Server Error"};
    }
}

const Messages = async () => {
  const messages = await  getData();
  return (
    <div className=' p-1 flex gap-1 flex-col'>
       {messages.map((val) => <MessageCard message={val} key={val._id} /> )}
    </div>
  )
}

export default Messages