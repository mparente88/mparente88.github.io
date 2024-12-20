export default function Wave() {
  return (
    <div className="wave-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,224L48,186.7C96,149,192,75,288,90.7C384,107,480,213,576,250.7C672,288,768,256,864,218.7C960,181,1056,139,1152,112C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          style={{ animation: "waveMotion 5s ease-in-out infinite" }} // Add this line
        ></path>
      </svg>
    </div>
  )
}
