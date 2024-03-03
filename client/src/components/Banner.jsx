import bannerImage from "../assets/banner.jpg"
function Banner(){
    return(
        <div className="banner">
            <div className="banner-text">
                <h2>Find what fits you best</h2>
                <p>Welcome to our Fenty-wear store! Explore a world of convenience and variety in just a few clicks. Start shopping now!</p>
                <button className="banner-btn">Shop now</button>
            </div>
            <div className="banner-image">
                <img src={bannerImage} alt="" />
            </div>
        </div>
    )
}
export default Banner