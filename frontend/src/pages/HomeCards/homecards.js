import { useState } from "react";



function Card({ icon, title, description, image, underImageDescription }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupImageSrc, setPopupImageSrc] = useState('');
  
    const toggleExpansion = () => setIsExpanded(!isExpanded);
  
    const handleClick = () => {
      setIsExpanded(!isExpanded);
      setShowPopup(false); // Close popup when expanding the card
    };
  
    const handleThumbnailClick = (src) => {
      setPopupImageSrc(src);
      setShowPopup(true);
    }
  
    return (
      <div
        className="section-container"
        style={{
          border: "1px solid #FF3B30",
          boxShadow: "1px 1px 5px black",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          width: "90vw",
          maxWidth: "100%",
          transition: "all 0.5s ease-in-out",
          overflow: "hidden",
          backgroundColor: "#000000", // set the background color
        }}
      >
        <div
          className="section-header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            backgroundColor: "#333",
            padding: "10px",
            borderRadius: "5px",
          }}
          onClick={handleClick} // Add this line to make the header clickable
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "60px", fontWeight: "bold", textShadow: "1px 1px 1px black" }}>
              {icon}
            </span>
            <span style={{ fontSize: "40px", fontWeight: "bold", color: "white" }}>
              {title}
            </span>
          </div>
          <button
            onClick={toggleExpansion}
            style={{
              fontSize: "32px", // Increase the font size of the +/- symbol
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "white",
            }}
          >
            {isExpanded ? "-" : "+"}
          </button>
        </div>
        {isExpanded && (
        <div
            className="section-content"
            style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
            transition: "all 0.5s ease-in-out",
            }}
        >


            <div style={{ flex: "1", textAlign: "left", alignItems: "flex-start" }}>
                <p style={{ fontSize: "25px", textAlign: "center", color: "white" }}>
                    {description}
                </p>
                </div>

            {image && (
                <div style={{ flex: "1", textAlign: "right" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                    <img
                        src={image}
                        alt={title}
                        style={{ maxWidth: "100%", marginTop: "20px" }}
                    />
                    {underImageDescription && (
                        <p style={{ fontSize: "20px", textAlign: "center", color: "white" }}>
                        {underImageDescription}
                        </p>
                    )}
                    </div>
                </div>
                )}

        </div>
        )}

       
        </div>
      );
  }
export default Card;  