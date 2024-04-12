const Models = ({isVisible}) => {
    const style = {
        background: isVisible && 'animate__animated animate__bounceIn'
    };

    return (
        <section className={style}>
        <div className="content">
        <h2>Our Latest Models</h2>
        <div className="model">
            <img src="model1.jpg" alt="Model 1" />
            <p>Model 1 Description</p>
        </div>
        <div className="model">
            <img src="model2.jpg" alt="Model 2" />
            <p>Model 2 Description</p>
        </div>
        </div>
        </section>
    );
};
  
export default Models;