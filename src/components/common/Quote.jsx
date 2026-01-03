const Quote = ({ text, author }) => {
  return (
    <div className="text-center mb-8">
      <blockquote className="text-base md:text-lg italic text-gray-600 dark:text-gray-400">
        "{text}"
      </blockquote>
      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
        — {author}
      </p>
    </div>
  );
};

export default Quote;
