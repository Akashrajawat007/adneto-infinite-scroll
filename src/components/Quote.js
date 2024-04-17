import React from "react";

function Quote({ data }) {
  return (
    <>
      <div className="quote-container">
        <div className="quote-symbol">&rdquo;</div>
          <p className="quote">{data.id}) {data.quote} </p>
          <footer>-{data.author}</footer>
      </div>
    </>
  );
}

export default Quote;
