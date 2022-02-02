/* eslint-disable jsx-a11y/anchor-is-valid */
import "./index-page.scss";

function IndexCard({ image, title, description }) {
  return (
    <article className="page">
      <a>
        <h2>{title}</h2>
        <section>
          <img className="image" alt={title} src={image} />

          <section className="introduction">
            <p>{description}</p>
          </section>
        </section>
      </a>
    </article>
  );
}

export default IndexCard;
