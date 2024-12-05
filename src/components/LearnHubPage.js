import React from "react";
import "./LearnHubPage.css";

const LearnHubPage = () => {
  return (
    <div className="learnhub-page">
      <div className="learnhub-container">
        <h1>Learn from the best, be your best..</h1>
        <p>Give yourself an upgrade with our inspiring online courses
          and join a global community of learners
        </p>
        <button className="getstarted-btn">Get Started</button>
      </div>

      <div className="c1">
        <div className="c2">
          <h2>Our Placement Partners</h2>
          <div className="c3">
            <img src="/assets/img/airbnb.png" alt="airbnb" />
            <img src="/assets/logo/client-8.png" alt="grabyo" />
            <img src="/assets/logo/Lifegroups.png" alt="Lifegroups" />
            <img src="/assets/logo/myob.png" alt="myob" />
            <img src="/assets/img/tailus.png" alt="tailus" />
            <img src="/assets/img/microsoft.png" alt="microsoft" />
          </div>
        </div>
        <p class="company">and, more companies</p>
      </div>
      <section class="3">
      <div class="main2">
      <div class="main21">
        <p>Open Source Theme and UI Components</p>
        <h2>Geaux Astro helps you craft beautiful websites efficientlt</h2>
      </div>
      </div>
      <div class="main3">
      <div class="main31">
      <div class="main311">
        <img src="/assets/logo/medal.svg" alt=""></img>
        <div class="badge1">
            <h3>Certificate Distribution </h3>
            <p> We offer certificates to validate and recognize your achievements.</p>
      </div>
        </div>
        <div class="main312">
            <img src="/assets/logo/thought.png" alt=""></img>
        <div class="badge2">
            <h3>Knowledge</h3>
            <p>We deliver transformative knowledge that empowers and inspires.</p>
        </div>
      </div>
      <div class="main313">
        <img src="/assets/logo/training.png" alt=""></img>
        <div class="badge3">
            <h3>Hands-on Experience</h3>
            <p>We provide hands-on experience for real-world learning.you learn best by doing.</p>
        </div>
      </div>
      </div>
      <div class="main32">
        <img src="/assets/img/AboutDashboard.png" alt="dashboard"></img>
      </div>
      </div>
      </section>
      <div class="main4">
        <div class="left-section">
          <h1>Empower Your Future      
            with cutting-edge skills<br />
            New, Embrace innovation,<br />
            master technology, &<br />
            shape the digital world.<br />
            Your journey to success starts here.
          </h1>
        </div>
        <div class="right-section">
          <p>
            where learning isn't just about gaining skills; it's about growing them.
            Join us, learn with confidence, and watch your skills soar.
          </p>
        </div>
      </div>
      <div class="main5">
        <div class="main51">
            <p>join our course with a proven track record of sucess, where learning isn't just about gaining skills, it's about growing them. Join us, learn with confidence, and watch your skills soar.</p>
            
            <p></p>
        </div>
      </div>
      <footer class="footer">
        <h1>Learnhub</h1>
        <p>2022 Tailwind Labs Inc. All rights reserved.</p>
        <div className="footer-links">
          <a href="/">Form</a>
        </div>
      </footer>
    </div>
  );
};

export default LearnHubPage;
