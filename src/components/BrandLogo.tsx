type BrandLogoProps = {
  className?: string;
};

const BrandLogo = ({ className }: BrandLogoProps) => {
  return (
    <img
      src="/logo.png"
      alt="DevOps Provider"
      className={className}
    />
  );
};

export default BrandLogo;
