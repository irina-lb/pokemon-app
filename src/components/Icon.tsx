import { FC } from "React";
import Image from "next/image";

type IconProps = {
  url: string;
  width?: number;
  height?: number;
};

const Icon: FC<IconProps> = ({ url, width = 256, height = 256 }) => {
  return (
    <Image
      data-testid="card-icon"
      src={`/icons/${url}.svg`}
      alt={url}
      width={width}
      height={height}
    />
  );
};

export default Icon;
