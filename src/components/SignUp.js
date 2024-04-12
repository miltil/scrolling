const SignUp = ({isVisible}) => {
    const style = {
        background: isVisible && 'animate__animated animate__bounceIn'
    };

    return (
        <section className={style}>
        <div className="content">
        <h2>Sign Up Now</h2>
        <p>Subscribe to our newsletter for exclusive updates and promotions.</p>
        <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Sign Up</button>
        </form>
        </div>
        </section>
    );
};
  
export default SignUp;