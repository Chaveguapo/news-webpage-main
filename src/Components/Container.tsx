import "./Container.css";
import desktop from "../assets/images/desktop.jpg";
import reviving01 from "../assets/images/reviving01.jpg";
import top02 from "../assets/images/top02.jpg";
import growth03 from "../assets/images/growth03.jpg";

export function Container() {
  return (
    <>
      <div className="container">
        <div className="banner-container">
          <img className="desktop-image" src={desktop} alt="desktopimage"></img>
          <div className="main-text-container">
            <h1 className="banner-tittle">The Bright Future of Web 3.0?</h1>
            <div className="smallbox-text">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="button-read">READ MORE</button>
            </div>
          </div>
        </div>
        <div className="new-container">
          <h2>New</h2>
          <div className="intro-text-new">
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cards ever catch up to</p>
            <hr></hr>
          </div>
          <div className="intro-text-new">
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
            <hr></hr>
          </div>
          <div className="intro-text-new">
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>

      <div className="post-container">
        <div className="set-post">
          <img src={reviving01}></img>
          <div className="textbox-post">
            <h2>01</h2>
            <h3>Reviving Retro PC's</h3>
            <p> What happpens when old PC's are given modern upgrades?</p>
          </div>
        </div>

        <div className="set-post">
          <img src={reviving01}></img>
          <div className="textbox-post">
            <h2>01</h2>
            <h3>Reviving Retro PC's</h3>
            <p> What happpens when old PC's are given modern upgrades?</p>
          </div>
        </div>

        <div className="set-post">
          <img src={reviving01}></img>
          <div className="textbox-post">
            <h2>01</h2>
            <h3>Reviving Retro PC's</h3>
            <p> What happpens when old PC's are given modern upgrades?</p>
          </div>
        </div>
      </div>
    </>
  );
}
