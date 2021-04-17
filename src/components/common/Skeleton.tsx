import { VFC } from 'react';import ContentLoader from 'react-content-loader';const Skeleton: VFC = () => {  const randomizeWidth = () => `${Math.floor(Math.random() * 31) + 50}%`;  return (    <ContentLoader viewBox="0 0 300 420" height={420} width={300}>      <rect x="3" y="3" rx="10" ry="10" width="80%" height="180" />      {[250, 280, 320, 350].map((y) => (        <rect          key={y}          x="4"          y={y}          rx="0"          ry="0"          width={randomizeWidth()}          height="20"        />      ))}    </ContentLoader>  );};export default Skeleton;