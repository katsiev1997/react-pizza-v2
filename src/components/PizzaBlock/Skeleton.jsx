import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f0ead6"
    foregroundColor="#f5d19e"
    {...props}
  >
    <circle cx="133" cy="137" r="125" />
    <rect x="14" y="289" rx="5" ry="5" width="250" height="25" />
    <rect x="13" y="340" rx="10" ry="10" width="250" height="79" />
    <rect x="19" y="449" rx="5" ry="5" width="86" height="27" />
    <rect x="123" y="440" rx="10" ry="10" width="140" height="45" />
  </ContentLoader>
);

export default Skeleton;
