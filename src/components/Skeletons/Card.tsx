import ContentLoader from "react-content-loader";

const SkeletonCard = () => (
  <ContentLoader
    width={330}
    height={400}
    viewBox="0 0 330 400"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
  >
    <rect x="0" y="225" rx="4" ry="4" width="330" height="9" />
    <rect x="0" y="240" rx="3" ry="3" width="330" height="6" />
    <rect x="0" y="0" rx="10" ry="10" width="330" height="217" />
  </ContentLoader>
);

export default SkeletonCard;
