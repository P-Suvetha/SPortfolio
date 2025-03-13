AOS.init({offset:0});

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

function changeContent(section) {
    const contentSection = document.getElementById('content-section');
    let content = '';

    switch(section) {
        case 'home':
            content = `
                <div class="main-container">
                    <div class="image" data-aos="zoom-in-right" data-aos-duration="2500">
                        <img src="./main.jpg" alt="">
                    </div>
                    <div class="content">
                        <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">Hey I'm <span>Suvetha</span></h1>
                        <div class="typewriter" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="900">I'm a <span></span></div>
                <p data-aos="flip-up" data-aos-duration="1000" data-aos-delay="1000">Passionate frontend developer in training. Building skills in HTML, CSS, and JavaScript with a focus on
                    responsive design and modern practices. Quick learner eager to apply new technologies to create interactive
                    user interfaces. Excited to collaborate on dynamic projects and deliver high-quality web experiences.
                    Committed to continuous learning and staying updated with industry trends. Seeking opportunities to apply and
                    grow my frontend development skills in a professional setting. 
                    </p>
                        <div class="social-links" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="1200">
                            <a href="https://github.com/sarathibalamurugan" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <!-- Removed the Facebook button -->
                            <a href="https://www.linkedin.com/in/suvetha-periyasamy/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                            <!-- Removed the X (Twitter) button -->
                            <a href="https://leetcode.com/u/ssuvetha254/" target="_blank"><i class="fa-solid fa-code"></i></a> <!-- Updated LeetCode button to look like others -->
                        </div>
                        <div class="btn" data-aos="zoom-out-left" data-aos-duration="1000" data-aos-delay="1300">
                            <button onclick="window.open('suvetha(web).pdf', '_blank')">Download CV</button>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'about':
            content = '<div class="content"><h1>About Me</h1><p>About content goes here...</p></div>';
            break;
        case 'skills':
            content = `
                <div class="content">
                    <h1>Technical Skills</h1>
                    <div class="skills-container">
                        <div class="skill-box">
                            <div class="skill-name">SQL</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 80%;">80%</div>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="skill-name">Java</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 90%;">90%</div>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="skill-name">React.js</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 50%;">50%</div>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="skill-name">MongoDB</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 50%;">50%</div>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="skill-name">Java Script</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 30%;">30%</div>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="skill-name">HTML / CSS</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 95%;">95%</div>
                            </div>
                        </div>
                        <h1>Other Skills</h1>
                        <div class="skill-box">
                            <div class="skill-name">Teamwork</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 85%;">85%</div>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="skill-name">Time Management</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 80%;">80%</div>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="skill-name">Effective Communication</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 90%;">90%</div>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="skill-name">Critical Thinking</div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: 85%;">85%</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
      
        case 'projects':
            content = `
                <div class="content">
                    <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">Projects</h1>
                    
                    <div class="project-box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1200">
                        <h2>CRUD Project</h2>
                        <img src="pimage/crud1.png" alt="CRUD Project" style="width:20%; height:auto; margin-bottom: 10px;">
                        <button onclick="window.open('https://github.com/P-Suvetha/Crud-Project.git', '_blank')">Source Code</button>
                    </div>
                    <div class="project-box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1400">
                        <h2>HTML Project</h2>
                        <img src="pimage/html.png" alt="HTML Project" style="width:20%; height:auto; margin-bottom: 10px;">
                        <button onclick="window.open('https://github.com/P-Suvetha/Html-Training1.git', '_blank')">Source Code</button>
                    </div>
                </div>
            `;
            break;
        case 'certifications':
            content = `
                <div class="content">
                    <h1>Certifications</h1>
                    <div class="certificates-container">
                        <div class="certificate">
                            <h2>Java Certification</h2>
                            <img src="certs/java scalar.jpg" alt="Java Certification" onclick="toggleFullscreen(this)">
                        </div>
                        <div class="certificate">
                            <h2>Java Script</h2>
                            <img src="certs/js certificate.jpg" alt="Java Script" onclick="toggleFullscreen(this)">
                        </div>
                        <div class="certificate">
                            <h2>Data Structures and Algorithms</h2>
                            <img src="certs/Nptel_dsa.jpg" alt="Data Structures and Algorithms" onclick="toggleFullscreen(this)">
                        </div>
                        <div class="certificate">
                            <h2>Introduction to ML</h2>
                            <img src="intro to ml/java.jpg" alt="Introduction to ML" onclick="toggleFullscreen(this)">
                        </div>
                        <div class="certificate">
                            <h2>Data Analysis</h2>
                            <img src="certs/data_analysis.jpg" alt="Data Analysis<" onclick="toggleFullscreen(this)">
                        </div>
                        <!-- Add more certificates as needed -->
                    </div>
                </div>
            `;
            break;
        case 'contact':
            content = `
                <div class="contact-container">
                    <h1>Contact Me</h1>
                    <form action="mailto:suvetha309@gmail" method="post" enctype="text/plain">
                        <input type="text" name="name" placeholder="Your Name" required>
                        <input type="email" name="email" placeholder="Your Email" required>
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            `;
            break;
        default:
            content = '<div class="content"><h1>Welcome</h1><p>Default content goes here...</p></div>';
    }

    contentSection.innerHTML = content;
}

function toggleFullscreen(img) {
    img.classList.toggle('fullscreen');
}
