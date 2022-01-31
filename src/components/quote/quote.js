import { string } from "prop-types";
import React from "react";
import "./quote.scss";

export default Quote;

function Quote({ quote, name, title }) {
  return (
    <section className="blockquoteContainer fullWidth">
      <blockquote>
        <p>{quote}</p>
        {(!!name || !!title) && (
          <footer>
            <section>
              {!!name && <h2>{name}</h2>}
              {!!title && <p>{title}</p>}
            </section>
          </footer>
        )}
      </blockquote>
    </section>
  );
}

Quote.propTypes = { quote: string, name: string, title: string };
