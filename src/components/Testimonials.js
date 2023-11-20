import "../sass/components/_testimonials.scss";
const Testimonials = () => {
  return (
    <div className="container_testimonials">
      <div className="left-section">
        <div className="info-testimonials">
          <h1 id="title">
            What people say <span>about Us.</span>
          </h1>
          <p>
            Our Clients send us bunch of smilies with our services and we love
            them.
          </p>
        </div>
      </div>
      <div className="right-section">
        <img
          className="img-profile"
          src={`${process.env.PUBLIC_URL}/icons/cards/profile.svg`}
          alt="profile"
        ></img>
        <div className="content-testimonials">
          <p className="paragraph">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <p className="name">Mike taylor</p>
          <p className="located">Lahore, Pakistan</p>
        </div>
        <div className="down-card">
          <div className="content-testimonials">
            <p className="paragraph">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="name">Chris Thomas</p>
            <p className="located">CEO of Red Button</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
