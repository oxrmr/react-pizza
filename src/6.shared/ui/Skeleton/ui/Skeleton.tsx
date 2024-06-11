import ContentLoader from 'react-content-loader';

type SkeletonProps = {
  className: string;
};

export const Skeleton: React.FC<SkeletonProps> = (props) => (
  <ContentLoader
    speed={2}
    width={240}
    height={440}
    viewBox='0 0 280 460'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <circle
      cx='128'
      cy='129'
      r='128'
    />
    <rect
      x='59'
      y='265'
      rx='10'
      ry='10'
      width='141'
      height='30'
    />
    <rect
      x='5'
      y='403'
      rx='11'
      ry='11'
      width='101'
      height='41'
    />
    <rect
      x='119'
      y='399'
      rx='15'
      ry='15'
      width='152'
      height='45'
    />
    <rect
      x='1'
      y='307'
      rx='9'
      ry='9'
      width='276'
      height='82'
    />
    <rect
      x='117'
      y='303'
      rx='0'
      ry='0'
      width='0'
      height='1'
    />
  </ContentLoader>
);
