import "./Container.css";
import desktop from "../assets/images/desktop.jpg";

export function Container() {
  return (
    <div className="container">
      <div className="banner-container">
        <img className="desktop-image" src={desktop} alt="desktopimage"></img>
        <div className="main-text-container">
          <h1 className="banner-tittle">The Bright Future of Web 3.0?</h1>
          <div className="smallbox-text">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="button-read">READ MORE</button>
          </div>
        </div>
        <div className="news-box"></div>
      </div>
    </div>
  );
}
