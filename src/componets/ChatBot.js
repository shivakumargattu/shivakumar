import React from "react";
import "./bot.css"
import {
  Button,
  Dialog,
  DialogHeader,
  
  DialogFooter,
} from "@material-tailwind/react";
 
 function App() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
    <div className="fixed bottom-5 right-4 m-4 z-10">
    
    <div className="">
      <Button className="bg-yellow-600 text-red-600 p-4 rounded shadow" onClick={handleOpen} >
      Chat BOT
        </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>MagicBus</DialogHeader>
        
        <iframe
         title="MagicBus"
          width="700"
          height="300"
          src='https://webchat.botframework.com/embed/magicbusbot-bot?s=9uBJylqEDE8.eygprRJSJ_y9fa5s6Afz1IYgqmCCiopr3KwAAXUzLxQ'
          
          
        ></iframe>
        
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
                  </DialogFooter>
      </Dialog>
      </div>
      </div>
    </>
  );
}
export default App
