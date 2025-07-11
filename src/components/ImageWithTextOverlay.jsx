import { cn } from "@/lib/utils";

const ImageWithTextOverlay = ({
  imageUrl,
  altText,
  title,
  description,
  overlayPosition = "center",
  overlayColor = "bg-black/50",
  textColor = "text-white",
  className,
  imageClassName,
  overlayClassName,
  textContainerClassName,
}) => {
  const positionClasses = {
    "top-left": "items-start justify-start",
    "top-center": "items-start justify-center",
    "top-right": "items-start justify-end",
    "center-left": "items-center justify-start",
    "center": "items-center justify-center",
    "center-right": "items-center justify-end",
    "bottom-left": "items-end justify-start",
    "bottom-center": "items-end justify-center",
    "bottom-right": "items-end justify-end",
  };

  return (
    <div className={cn("relative w-full h-full group", className)}>
      <img
        src={imageUrl}
        alt={altText}
        className={cn(
          "w-full h-full object-cover transition-all duration-500 group-hover:scale-105",
          imageClassName
        )}
      />
      <div
        className={cn(
          "absolute inset-0 flex p-8",
          positionClasses[overlayPosition],
          overlayColor,
          overlayClassName
        )}
      >
        <div
          className={cn(
            "max-w-md space-y-4",
            textColor,
            textContainerClassName
          )}
        >
          {title && (
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-lg md:text-xl lg:text-2xl">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageWithTextOverlay;
