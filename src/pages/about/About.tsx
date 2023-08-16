import React from "react";
import { Container, Typography } from "@mui/material";
import "./about.css"; // Import the CSS file

const About: React.FC = () => {
  return (
    <Container>
      {/* Quote */}
      <Typography variant="h5" align="center" className="quote-header">
        “The price of success is hard work, dedication to the job at hand.”
        - Vince Lombardi
      </Typography>

      {/* Rest of the content */}
      {/* ... */}
      <div className="two-column-layout">
        {/* Left Column */}
        <div className="left-column">
          <Typography variant="body1">
            <h2>OUR STORY</h2>
            <p>
              Founded in 2013, IBG Institute is an organization run by engineers, for engineers. We believe that the most effective way to learn is through practical application and that success in the job market comes from mastering in-demand skills. As a non-profit tech-training institute registered as a 501(c)3, our mission is clear: to provide access to world-class training and job placement services at an affordable cost. Our focus on technology and software engineering reflects our belief that these fields hold the greatest promise for economic and career mobility. It is our conviction that students should not have to incur exorbitant costs to obtain the training they need to thrive. Furthermore, we contend that the traditional U.S. college and university system is no longer aligned with the job market and will continue to lose relevance in the coming decade. Our program is designed to deliver rigorous, practical tech training and job placement opportunities to those willing to put in the effort. With fully-certified instructors who are among the best in their field, we are committed to empowering our students to achieve their goals.
            </p>
            <h2>OUR APPROACH</h2>
            <p>
              As Horace Mann famously noted, education is the great equalizer of human society, balancing the social machinery and offering equal opportunity to all. At IBG Institute, we believe in this principle and are dedicated to providing access to education that can launch our students into high-paying careers in technology, even if they have no prior experience. Our rolling admission policy means that there is always an opportunity to register and start your journey towards a fulfilling new career in the tech industry.

              Our goal is to help individuals secure tech jobs paying 80-120k per year by leveraging our non-profit status and using technology, grants, and market knowledge to create the most streamlined paths to employment. All our programs are heavily subsidized, making them accessible to everyone, regardless of their financial situation. As a registered 501(c)3 organization known as the Information Technology Development Program, we are committed to helping our students succeed.

              We recognize the service and sacrifice of our veterans and offer them a 50% discount on all regular programs. We believe that the high costs of traditional tech bootcamps are unfair and leave many people unable to access the opportunities they deserve. At IBG Institute, we are committed to changing this dynamic and providing equal access to technology education for all. You can reach us at enrollment@ibginstitute.com anytime to learn more.
            </p>
            <h3>Who we are:</h3>
            <p>
              We are engineers and instructors, dedicated to delivering something different in the marketplace. We have seen first-hand the power of a strong, hand-on tech skills program. We have seen how lives have been changed through mastery and application of key technological concepts and skills. We’ve seen the unemployed move quickly into gainful employment, and we’ve seen “unemployable” individuals go to making six figures in a very short amount of time. We are obsessed with delivering no-nonsense training programs that optimally position the student to get jobs. THE JOB IS OUR #1 FOCUS!
            </p>
          </Typography>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <Typography variant="body1">
            <h2>What we do:</h2>
            <p>
              At our institute, we specialize in training engineers. Our programs are designed to support individuals from all backgrounds to achieve success in technology and software engineering, regardless of their economic or educational history. We provide a clear roadmap for our students and expect them to diligently execute within their given timeframes to complete all coursework.
              While we maintain an optimistic outlook, we do not sugarcoat the process. Completion of the coursework we provide is the key to success in today’s tech economy. Conversely, failure to finish or complete the work means that one is not yet ready to thrive in this industry. It’s as simple as that. We firmly believe that anyone can succeed if they apply themselves, and as such, our programs are self-paced and designed to produce results. We understand that each individual learns at their own pace, and we structure our programs accordingly.
            </p>
            <p>IBG Institute is about embracing the power of continuous learning in a rapidly evolving technological landscape. In today's economy, where change is constant and technology is advancing at an unprecedented pace, IBG Institute stands as a beacon of opportunity. It recognizes the growing fear of being left behind due to automation and the rise of AI, and it offers a transformative solution – continuous learning.

              At its core, IBG Institute is dedicated to equipping individuals with the skills and knowledge needed to not just survive but thrive in the realm of web development, cloud computing, AI, and chatbot programming. The institute's fast-track program is designed to empower individuals through a rigorous 16-week journey of immersive learning, followed by an eight-week internship that solidifies newfound expertise.

              IBG Institute understands that in this dynamic landscape, where what's cutting-edge today might be obsolete tomorrow, staying relevant is paramount. The institute's program ensures that individuals are always up-to-date with the latest technologies and industry trends, fostering adaptability to changing job requirements.

              Moreover, IBG Institute goes beyond just skill acquisition – it cultivates a mindset of innovation and progress. By mastering pivotal technologies such as Amazon Web Services (AWS) and delving into the intricacies of identity and compliance modules, individuals gain the confidence to harness the full potential of technology, especially AI.

              Ultimately, IBG Institute is about shaping pioneers. It's about fostering the driving force behind innovation, ensuring that its graduates are not just prepared for the future, but are the architects of it. Through continuous learning and mastery of cutting-edge technologies, IBG Institute empowers individuals to be the catalysts of progress, taking charge of their careers and shaping the ever-evolving technological landscape. The journey toward mastering the technologies of the future awaits at IBG Institute.
            </p>
          </Typography>
        </div>

      </div>
      {/* Meet The Team */}
      <Typography variant="h3" align="center" className="meet-the-team">
        Meet The Team
      </Typography>
      <div className="team-members">
        {/* Add 5 equally spaced circle images here */}
        <img className="carousel-item" font-family="Helvetica Neue" alt="Person 1" />
        <img className="carousel-item" font-family="Helvetica Neue" alt="Person 2" />
        <img className="carousel-item" font-family="Helvetica Neue" alt="Person 3" />
        <img className="carousel-item" font-family="Helvetica Neue" alt="Person 4" />
        <img className="carousel-item" font-family="Helvetica Neue" alt="Person 5" />
      </div>

      <div>
        {/* In the About component */}
        <div className="marquee-container">
          <div className="marquee">
            <p>
              Wave Mobile Technology • Disney • IBG Software • Revolt.tv • Universal Music Group • Nonfungible.com • Zubloc • PGA Tour • Savgex Fenty • Wells Fargo • Bank of America • Federal Reserve Bank • Facebook • Google • Fis • Blue Cross Blue Shield • IBM • Oracle • Microsoft
            </p>
          </div>
        </div>
        <div className="video-section">
          {/* YouTube */}
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/your-video-id"
              title="Your Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-container">
          </div>
        </div>


      </div>

    </Container>
  );
};

export default About;
