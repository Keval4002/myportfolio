const AboutImage = ({ src, alt = "About" }) => {
  return (
    <div className="w-full md:w-1/2">
      <img
        src={src}
        alt={alt}
        className="w-full max-w-xs md:max-w-md mx-auto h-64 md:h-80 rounded-lg shadow-2xl object-cover"
      />
    </div>
  );
};

export default AboutImage;
