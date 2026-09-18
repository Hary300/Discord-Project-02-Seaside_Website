import { cn } from 'cn';

type GradientDirection = 'toTop' | 'toBottom';

interface BlackGradientProps {
  gradientDirection: GradientDirection;
}

const BlackGradient = ({ gradientDirection }: BlackGradientProps) => {
  return (
    <div
      className={cn(
        'absolute inset-x-0 h-3 from-black/15 to-transparent',
        gradientDirection === 'toTop'
          ? 'bg-linear-to-t bottom-0'
          : 'bg-linear-to-b top-0'
      )}
    />
  );
};

export default BlackGradient;
