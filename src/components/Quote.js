import React from "react";

function Quote({ data }) {
  return (
    <>
      <p>
        <div className="quote">
          {data.id}) {data.quote}
        </div>
        <footer>-{data.author}</footer>
      </p>
    </>
  );
}

export default Quote;
