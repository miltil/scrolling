const SpecialDeal = ({isVisible}) => {
    const style = {
        background: isVisible && 'animate__animated animate__bounceIn'
    };

    return (
        <section className={style}>
        <div className="content">
        <h2>Special Deal</h2>
        <p>Don't miss out on our limited-time offer!</p>
        <img src="special-deal.jpg" alt="Special Deal" />
        </div>
        </section>
    );
};
  
export default SpecialDeal;