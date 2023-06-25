import ContentLoader from "react-content-loader";

const SkeletonTable = () => (
  <ContentLoader
    width={1000}
    height={400}
    viewBox="0 0 1000 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="4" ry="4" width="20" height="20" />
    <rect x="67" y="0" rx="10" ry="10" width="85" height="19" />
    <rect x="188" y="0" rx="10" ry="10" width="169" height="19" />
    <rect x="402" y="0" rx="10" ry="10" width="85" height="19" />
    <rect x="523" y="0" rx="10" ry="10" width="169" height="19" />
    <rect x="731" y="0" rx="10" ry="10" width="85" height="19" />
    <rect x="852" y="0" rx="10" ry="10" width="85" height="19" />
  
    <rect x="0" y="40" rx="4" ry="4" width="20" height="20" />
    <rect x="67" y="40" rx="10" ry="10" width="85" height="19" />
    <rect x="188" y="40" rx="10" ry="10" width="169" height="19" />
    <rect x="402" y="40" rx="10" ry="10" width="85" height="19" />
    <rect x="523" y="40" rx="10" ry="10" width="169" height="19" />
    <rect x="731" y="40" rx="10" ry="10" width="85" height="19" />
    <rect x="852" y="40" rx="10" ry="10" width="85" height="19" />
  </ContentLoader>
);

export default SkeletonTable;
