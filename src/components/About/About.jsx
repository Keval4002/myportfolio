import Quote from '../common/Quote';
import SectionHeader from '../common/SectionHeader';
import AboutImage from './AboutImage';
import AboutStory from './AboutStory';

const About = () => {
  const storyParagraphs = [
"I’m a tech enthusiast carving my path through software development, with a strong focus on web technologies and DevOps. Coding hasn’t always been enjoyable but it has a funny way of teaching humility. Just when you think you’ve reached perfection, time politely taps you on the shoulder and reminds you that yesterday’s “best work” was merely a warmup. In its own chaotic way, coding keeps me grounded, sharpens my problem-solving mindset, and helps me approach both code and life with greater clarity—one bug at a time.",
"Beyond technology, I’m on a continuous journey of self-healing and personal growth. I’m learning to adapt to life in its rawest form, grow socially, and take intentional steps outside my comfort zone. Each experience technical or personal shapes how I think, build, and move forward."
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <SectionHeader title="About Us" />

        {/* Quote */}
        <Quote 
          text="Code is like humor. When you have to explain it, it's bad."
          author="Cory House"
        />

        {/* Image and Story Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8">
          <AboutImage src="/images/about-img.jpeg" alt="About" />
          <AboutStory paragraphs={storyParagraphs} />
        </div>
      </div>
    </section>
  );
};

export default About;
