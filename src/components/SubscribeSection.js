import "../sass/components/_subscribe.scss";
const SubscribeSection = () => {
  return (
    <div className="section_subscribe">
      <div className="container_subscribe">
        <div className="title">
          <h1>Subscribe and get exclusive deals & offer</h1>
        </div>
        <div className="input">
          <img src={`${process.env.PUBLIC_URL}/icons/mail.svg`} alt="mailIcon" />
          <input placeholder="Enter your mail"></input>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
