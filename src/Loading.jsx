import React from "react";
import { Code } from "react-content-loader";

const Loading = (props) => (
  /*
  count = a value to the parent component that indicates how many loader elements to add. For a bigger
  page, like the full blog page, you need to display more (3), to cover more area.
  */

  <section>
    {Array.from({ length: props.count }, (_, index) => (
      <Code key={index} style={{ width: "100%", marginTop: "3rem" }} />
    ))}
  </section>
);

export default Loading;
