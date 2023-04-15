import { useState , useEffect} from "react";

function SpeechRec() {
  const [transcribedText, setTranscribedText] = useState("");
  const [textAreaText, setTextAreaText] = useState("")
  const [recording, setRecording] = useState(false);
  
  const handleSpeechRecognitionResult = (event) => {
    // Extract the transcribed text from the event object
    const { transcript } = event.results[0][0];
    recognition.stop()
    console.log({transcript, transcribedText});
    
    setTextAreaText((prevText) => prevText + transcript + " ");
    setTranscribedText(transcript);
  };
  
  const handleSpeechRecognitionEnd = () => {
    setRecording(false);
    console.log('ended');
    recognition.stop();
  };
  
  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.lang = "en-US";
  recognition.addEventListener("result", handleSpeechRecognitionResult);
  recognition.addEventListener("end", handleSpeechRecognitionEnd);
  
  const handleStartTranscription = () => {
    // Start the speech recognition and set the recording state to true
    setRecording(true);
    recognition.start();
  };
  
  const handleStopTranscription = () => {
    console.log('stopping');
    recognition.stop();
  };

  // Add event listener for keydown event on the document object
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 32) { // 32 is the key code for spacebar
        handleStartTranscription();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  
  return (
    <div>
      <button onClick={recording ? handleStopTranscription : handleStartTranscription}>
        {recording ? "Stop Transcription" : "Start Transcription"}
      </button>
      <p>{textAreaText}</p>
    </div>
  );
}

export default SpeechRec;
