import '../sass/components/_things.scss'
const ThingsSection = () =>{
  const style = {
    width: '482px',
  }
  return(
    <div className="container_things">
      <div className="info-section">
        <h1 id="title">
        Things you need <span id="second_color">to do</span>
        </h1>
        <p id="paragraph" style={style}>
        We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.
        </p>
      </div>
      <div className="container-cards-things">
        <div className="container-card">
          <div className="image-card">
            <img src={`${process.env.PUBLIC_URL}/icons/things/icon1.png`} alt="icon1" />
          </div>
          <div className="title-card">
            <h1>Sign Up</h1>
          </div>
          <div className="info-card">
            <p>Completes all the work associated with planning and processing</p>
          </div>
        </div>
        <div className="container-card">
          <div className="image-card">
            <img src={`${process.env.PUBLIC_URL}/icons/things/icon2.png`} alt="icon2" />
          </div>
          <div className="title-card">
            <h1>Worth of Money</h1>
          </div>
          <div className="info-card">
            <p>After successful access then book from exclusive deals & pricing</p>
          </div>
        </div>
        <div className="container-card">
          <div className="image-card">
            <img src={`${process.env.PUBLIC_URL}/icons/things/icon3.png`} alt="icon3" />
          </div>
          <div className="title-card">
            <h1>Exciting Travel</h1>
          </div>
          <div className="info-card">
            <p>Start and explore a wide range of exciting travel experience.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThingsSection;