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
            <h3>What we do:</h3>
            <p>
              At our institute, we specialize in training engineers. Our programs are designed to support individuals from all backgrounds to achieve success in technology and software engineering, regardless of their economic or educational history. We provide a clear roadmap for our students and expect them to diligently execute within their given timeframes to complete all coursework.

              While we maintain an optimistic outlook, we do not sugarcoat the process. Completion of the coursework we provide is the key to success in today’s tech economy. Conversely, failure to finish or complete the work means that one is not yet ready to thrive in this industry. It’s as simple as that. We firmly believe that anyone can succeed if they apply themselves, and as such, our programs are self-paced and designed to produce results. We understand that each individual learns at their own pace, and we structure our programs accordingly.
            </p>
          </Typography>
        </div>
        {/* YouTube video */}
        <div className="video-container">
          <iframe
            title="TRAP Tech on the News Edit"
            id="thim-video"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/yUTuXqW803U"
            allowFullScreen
            style={{ border: 0 }}
          />
        </div>

      </div>
      {/* Meet The Team */}
      <Typography variant="h3" align="center" className="meet-the-team">
        Meet The Team
      </Typography>
      <div className="team-members">
        {/* Add 5 equally spaced circle images here */}
        <img className="team-member-image" src="person1.jpg" alt="Person 1" />
        <img className="team-member-image" src="person2.jpg" alt="Person 2" />
        <img className="team-member-image" src="person3.jpg" alt="Person 3" />
        <img className="team-member-image" src="person4.jpg" alt="Person 4" />
        <img className="team-member-image" src="person5.jpg" alt="Person 5" />
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

      </div>

    </Container>
  );
};

export default About;
