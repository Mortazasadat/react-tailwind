interface PropsType {
  src: string;
}

export function Iframe({ src }: PropsType) {
  return <iframe src={src} className="w-full h-full mx-auto bg-white" />;
}

export default Iframe;
