const SectionHeader = ({ title, subtitle, size = "default" }) => {
  const sizeClasses = {
    small: "text-3xl md:text-4xl",
    default: "text-4xl md:text-5xl",
    large: "text-5xl md:text-6xl lg:text-7xl"
  };

  return (
    <div className="text-center mb-8">
      <h2 className={`${sizeClasses[size]} font-bold text-gray-900 dark:text-white mb-2`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
