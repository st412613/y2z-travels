import "./App.css";
import Itinerary from "./components/Itinerary";

function App() {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-3/5">
        <Itinerary />
      </div>
      <div className="w-full md:w-2/5">
        <div className="w-full h-64 md:h-full">
           <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.2118100471394!2d77.24051531508485!3d28.610424982425962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e47d1d91c1%3A0x38c75ac6e7cdb008!2sRed%20Fort!5e0!3m2!1sen!2sin!4v1628850176017!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full"
        ></iframe>
        </div>
      </div>
    </div>
  )
}
export default App;
