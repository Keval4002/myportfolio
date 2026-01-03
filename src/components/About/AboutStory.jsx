const AboutStory = ({ paragraphs }) => {
  return (
    <div className="w-full md:w-1/2">
      <div className="text-gray-700 dark:text-gray-300 space-y-3 text-base leading-relaxed max-w-xl md:mx-0 mx-auto">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default AboutStory;
