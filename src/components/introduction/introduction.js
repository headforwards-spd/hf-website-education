import { arrayOf, shape, string } from "prop-types";
import React from "react";
import "./introduction.scss";

export default Introduction;
export const IntroductionProps = {
  introduction: shape({
    title: string,
    content: arrayOf(string),
  }),
};

function Introduction({ introduction }) {
  const { title, content } = introduction || {};

  if (!title && !(content || []).length) {
    return null;
  }

  if (!title && (content || []).length) {
    return (
      <section>
        {content.map((item, key) => (
          <p key={key}>{item}</p>
        ))}
      </section>
    );
  }
  return <section>{title && <h2>{title}</h2>}</section>;
}

Introduction.propTypes = IntroductionProps;
Introduction.defaultProps = {
  introduction: null,
};
