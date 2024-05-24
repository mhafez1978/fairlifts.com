const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "60vh",
        overflow: "hidden",
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
        src="https://www.youtube.com/embed/4UrM5qBvUCE?autoplay=1&mute=1&loop=1&playlist=4UrM5qBvUCE"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Hero Background Video"
      ></iframe>
      <div
        style={{
          position: "relative",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: darken the background for better text readability
          height: "100%",
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
          height: "100%",
          paddingTop: "10%",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
          }}
          className="text-4xl font-bold"
        >
          COMPLETE HELICOPTER SERVICES
        </h1>
        <h2
          style={{
            color: "white",
            textAlign: "center",
          }}
          className="text-xl font-bold"
        >
          FULL SERVICE CONSTRUCTION, CHARTER, AND AERIAL SURVEY SOLUTIONS
        </h2>
        <img
          style={{
            display: "block",
            margin: "auto",
            width: "20%",
            height: "auto",
          }}
          src="https://www.fairlifts.com/wp-content/uploads/2017/11/fair-lifts-logo-light.png"
          alt="FairLifts Logo"
        />
      </div>
    </div>
  );
};

export default HeroSection;
