import Book from "../../components/Book/Book"

const Banner = (props) => {
    return (
        <section>
            <article id="hero">
                <h1 className="heading_shadow">SPECIAL OFFER</h1>
                <p>
                    30% Off This Weekend
                </p>
                {/* <a href="#" class="cta"> Book now </a> */}
                <Book/>
            </article>
        </section>
    );
}

export default Banner;