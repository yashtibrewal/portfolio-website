function playByDefault(){
    var video = document.getElementById("landingPageVideo");
    console.log(video?.nodeType);
    console.log(video);
}


function LandingPage() {
    return (
      <div>
          <video loop autoPlay id="landingPageVideo">
            <source
                src="1061996857-preview.mp4"
                type="video/mp4"
            />
            Your browser does not support the video tag
          </video>
      </div>
    );
  }

export default LandingPage