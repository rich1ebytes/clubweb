import placeholder from "../assets/clubs/placeholder1.jpg";
import placeholder2 from "../assets/clubs/placeholder2.jpeg";
import placeholder3 from "../assets/clubs/placeholder3.jpg";
import placeholder4 from "../assets/clubs/placeholder4.jpg";
import placeholder5 from "../assets/clubs/placeholder5.jpg";
import placeholder6 from "../assets/clubs/placeholder6.jpg";

const arrayOfPlaceholders = [
  placeholder,
  placeholder2,
  placeholder3,
  placeholder4,
  placeholder5,
  placeholder6,
];

function getRandomPlaceholder() {
  return arrayOfPlaceholders[
    Math.floor(Math.random() * arrayOfPlaceholders.length)
  ];
}

const clubsData = [
  {
    id: 1,
    name: "Xpressionz Club",
    tagline: "“Where imagination meets the creativity on the stage”",
    description: `Xpressionz Club, the largest in our college, is a vibrant platform for creativity and talent. More than a club,
       it builds confidence, teamwork, and lasting memories.`,
    fullDescription: ` 
  ## About Us
  
  **Xpressionz Club** is where creativity meets performance.
  
  We host multiple events to encourage students to showcase their talents.
  
  ### Activities:
  - Drama & Theatrics
  - Dance Performances
  - Music Shows
  - Workshops & Open Mics
  
  ### Why Join?
  You'll gain confidence, meet like-minded peers, and be part of a community that celebrates art and expression.`,
    imageUrl: "/src/assets/clubs/exp.jpeg" || getRandomPlaceholder(),
  },
  {
    id: 2,
    name: "Youth Red Cross (YRC)",
    tagline: "“With Humanity, Towards Humanity”",
    description: `The Youth Red Cross (YRC) is a vital wing of the Indian Red Cross Society where young volunteers play a key role in serving their communities. It empowers students to contribute to humanitarian services, health awareness, and social welfare, focusing on helping the most vulnerable people.`,
    fullDescription: ` 
## About Us

The Youth Red Cross (YRC) is a student movement under the Indian Red Cross Society. As a significant part of the Red Cross family, it encourages young people to uphold the principles of humanity, impartiality, and voluntary service. YRC equips students with knowledge, leadership, and a sense of responsibility to serve society through health, emergency, and humanitarian initiatives.

### Activities:
YRC undertakes a variety of impactful activities, including:
•	Blood donation camps and health check-up programs
•	First aid training and emergency response services
•	Health and hygiene awareness drives in schools and communities
•	Environmental protection activities such as tree plantation and clean-up drives
•	Relief services during disasters and emergencies
•	Observance of important health and humanitarian days (World Red Cross Day, World Health Day, etc.)

### Why Join?
•  To serve humanity and make a real difference in people’s lives
•  To develop leadership, responsibility, and teamwork through volunteer service
•  To gain valuable knowledge in first aid, health care, and disaster response
•  To be part of a global humanitarian movement recognized worldwide
•  To nurture compassion, empathy, and a spirit of selfless service
    `,
    imageUrl: "/src/assets/clubs/yrc.png" || getRandomPlaceholder(),
  },

  {
    id: 3,
    name: "VOICE",
    tagline:
      "Inspiration to transformation– Lets continue the passion of making the difference",
    description: `VOICE, founded in 2001-02, nurtures student talent and entrepreneurial spirit. It hosts events like debates, case studies, JAM, and mock stock exchange.`,
    fullDescription: `
  ## About Us
  
  **VOICE**, founded in 2001–02, is where intellect meets expression.
  
  We nurture student talent and entrepreneurial spirit through thought-provoking events that inspire learning and leadership.
  
  ### Activities:
  - Debates & Discussions  
  - Case Study Competitions  
  - JAM (Just-A-Minute) Sessions  
  - Mock Stock Exchange  
  
  ### Why Join?
  You'll sharpen your communication skills, develop business acumen, and gain the confidence to think critically and lead with purpose.`,
    imageUrl: getRandomPlaceholder(),
  },
  {
    id: 4,
    name: "Abhyas Club",
    tagline: "“A great platform to learn, lead and create innovative ideas.”",
    description: `The Abhyas Club, launched in November 2011, is a student-driven platform for showcasing talent and growth. True to its name, it helps students overcome inhibitions and learn through practice.`,
    fullDescription: `
  ## About Us
  
  **The Abhyas Club**, launched in November 2011, is where practice meets progress.
  
  We provide a student-driven platform that encourages learning, creativity, and personal growth by helping members overcome inhibitions through participation.
  
  ### Activities:
  - Group Discussions  
  - Public Speaking Practice  
  - Skill-Building Sessions  
  - Knowledge-Sharing Workshops  
  
  ### Why Join?
  You'll learn by doing, grow more confident, and be part of a community that supports self-improvement and continuous learning.`,
    imageUrl: getRandomPlaceholder(),
  },
  {
    id: 5,
    name: "Pscife (Physical Science Club)",
    tagline: "“Breaking Stereotypes, Building Curiosity”",
    description: `Pscife, the Physical Science Club, was established in the academic year 2010–2011 to make science engaging, fun, and approachable. The club organizes interactive activities and events to spark curiosity and break the common stereotypes about science.`,
    fullDescription: ` 
  ## About Us
  
  Pscife is a student-driven Physical Science Club formed in 2010–2011 with the vision of making science exciting beyond textbooks. The club focuses on creating an environment where students can explore scientific ideas, experiment creatively, and learn through fun-filled experiences.
  ### Activities:
  We organize a wide range of events, including:
  • Fun experiments and demonstrations
  • Science quizzes and treasure hunts
  • Workshops, exhibitions, and interactive talks
  • Science-inspired games and competitions
  • Celebrations of science days and festivals
  
  ### Why Join?
  •  To explore science in an engaging and enjoyable way
  •  To overcome stereotypes that science is “tough” or “boring”
  •  To participate in exciting activities that enhance creativity and critical thinking
  •  To connect with like-minded peers who share a passion for science
  •  To gain knowledge, teamwork skills, and confidence through interactive learning`,
    imageUrl: getRandomPlaceholder(),
  },
  {
    id: 6,
    name: "Fusion Tech (Computer Science Club)",
    tagline: "“Innovate, Compete, and Create the Future”",
    description: `Fusion Tech, the Computer Science Club established in the academic year 2017–18, provides students with exposure to the latest technologies through workshops, alumni talks, and competitions. The club nurtures innovation, motivates startup ideas, and builds both technical and business confidence among students.`,
    fullDescription: ` 
  ## About Us
  
  Fusion Tech is a vibrant Computer Science Club formed in 2017–18 to bridge the gap between academics and the ever-evolving tech industry. The club focuses on bringing awareness about emerging technologies by organizing workshops with industry experts, alumni interaction sessions, and hands-on activities. Beyond technical learning, the club also emphasizes holistic development by encouraging creativity, leadership, and teamwork.
  ### Activities:
  Fusion Tech conducts a variety of engaging activities, including:
  • Workshops on the latest technologies conducted by industry experts
  • Alumni talks and mentorship sessions
  • Technical competitions like coding contests, quizzes, and hackathons
  • Startup idea pitching sessions to foster entrepreneurship
  • Extracurricular activities such as Group Discussions, Emoji Designing, Sports events, and more
  
  ### Why Join?
  • To stay updated with cutting-edge technologies and industry trends
  • To enhance technical skills through workshops, competitions, and peer learning
  • To develop entrepreneurial thinking and confidence in presenting your own startup ideas
  • To gain exposure through networking with alumni and industry experts
  • To balance technical learning with fun extracurricular activities that build overall personality.`,
    imageUrl: getRandomPlaceholder(),
  },
  {
    id: 7,
    name: "NSS (National Service Scheme) Unit",
    tagline: "“Where Not Me, But You”",
    description: `The NSS Unit of the college was established on 26th November 2004 to encourage students to actively participate in community service and social responsibility. Guided by faculty coordinators and the principal, the unit engages in a variety of activities that foster leadership, empathy, and teamwork.`,
    fullDescription: ` 
  ## About Us
  
  The National Service Scheme (NSS) Unit of our college was initiated on 26th November 2004 under the guidance of Dr. K. Venkatachalam (NSS Coordinator). The unit functions with the support of Dr. G.S.V.R.K. Choudary, Principal of the college and Chairman of the NSS Unit, and Mr. P. Srinivasa, the Program Officer. The unit aims to develop the personality of students through community service while instilling a sense of social responsibility and commitment towards nation-building.
  ### Activities:
  The NSS Unit conducts diverse activities such as:
  • Blood donation camps and health awareness programs
  • Cleanliness drives and environmental conservation activities (plantation drives, Swachh Bharat Abhiyan)
  • Social awareness campaigns on literacy, health, and hygiene
  • Community development programs in adopted villages
  • Observance of national days and celebrations of important events
  • Disaster relief and volunteer support during emergencies
  
  ### Why Join?
  •  To contribute meaningfully to society through service-oriented programs
  •  To develop leadership, teamwork, and organizational skills
  •  To build empathy, responsibility, and discipline through real-life experiences
  •  To gain opportunities to interact with communities and understand social challenges
  •  To become a responsible citizen committed to the motto “Not Me, But You”
  `,
    imageUrl: getRandomPlaceholder(),
  },
  {
    id: 8,
    name: "BSG (Bharat Scouts & Guides)",
    tagline: "“Creating Responsible Citizens Through Service and Adventure”",
    description: `The Bharat Scouts & Guides is the national scouting and guiding association of India, recognized by the Government of India. It is part of a worldwide movement that nurtures loyalty, patriotism, service, and leadership among young boys and girls through adventure, discipline, and community service.`,
    fullDescription: ` 
  ## About Us
  
  The Bharat Scouts & Guides (BS&G) is India’s official scouting and guiding organization, with its origins tracing back to 1909 for Scouting and 1911 for Guiding. Internationally recognized, BS&G is a member of both the World Organization of the Scout Movement (WOSM) and the World Association of Girl Guides and Girl Scouts (WAGGGS). With millions of members across the country, the movement aims to develop young people into responsible citizens who are loyal, patriotic, and considerate towards others. Supported by the Ministry of Youth Affairs and Sports, the BS&G promotes discipline, character-building, and community service.
  ### Activities:
  The Bharat Scouts & Guides conduct a wide range of activities, including:
  • Camps, trekking, hiking, and adventure programs
  • First aid training, survival skills, and community service projects
  • Environmental protection drives like tree plantation and clean-up campaigns
  • Awareness campaigns on health, hygiene, and social issues
  • Observance of national festivals, flag ceremonies, and parades
  • Participation in international jamborees, rallies, and cultural exchanges
  
  ### Why Join?
  •  To develop qualities of leadership, teamwork, and self-reliance
  •  To participate in exciting adventures, camps, and outdoor activities
  •  To serve the community and contribute to nation-building
  •  To gain recognition and opportunities at national and international levels
  •  To embody the spirit of loyalty, patriotism, and service while building lifelong friendships
  `,
    imageUrl: getRandomPlaceholder(),
  },
  {
    id: 9,
    name: "Bhavan’s Vivekananda Yoga Centre (BVYC)",
    tagline: "“Wellness Through Balance of Body and Mind”",
    description: `Bhavan’s Vivekananda Yoga Centre (BVYC), established on 28th November 2022 under the leadership of Dr. G.S.V.R.K. Choudary, Principal of BVC, aims to promote health and wellness through yoga. The centre helps students achieve physical, mental, and emotional balance for overall well-being and academic success.`,
    fullDescription: ` 
  ## About Us
  
  The Bhavan’s Vivekananda Yoga Centre (BVYC) was founded in 2022 with a vision to integrate yoga into the lives of students, enabling them to achieve holistic well-being. The centre not only focuses on fitness but also emphasizes stress management, emotional stability, and concentration, helping students lead healthier, more balanced lives.
  ### Activities:
  BVYC organizes a variety of wellness-focused activities, including:
  • Regular yoga sessions and practice classes
  • Meditation and breathing exercises for stress relief
  • Workshops and seminars on holistic health and wellness
  • Special programs on International Yoga Day and other occasions
  • Guidance on lifestyle management and mindfulness practices
  
  ### Why Join?
  •  To improve concentration, memory, and academic performance
  •  To develop mental calmness, stress management, and emotional resilience
  •  To enhance physical fitness, flexibility, and immunity
  •  To build a balanced lifestyle that supports overall well-being
  •  To be part of a community that values health, mindfulness, and positivity
  `,
    imageUrl: getRandomPlaceholder(),
  },
  {
    id: 10,
    name: "greENERGY",
    tagline: "“Where Go Green, Live Clean”",
    description: `Founded on 16th August 2005, greENERGY is an eco-conscious club that promotes harmony with nature, conservation of resources, and sustainable living. It inspires students to embrace eco-friendly practices, organic living, and biodiversity appreciation while fostering cultural values.`,
    fullDescription: ` 
  ## About Us
  
  greENERGY was established on 16th August 2005 with the vision of becoming one with nature and spreading environmental consciousness among students. The club focuses on conserving natural resources, appreciating the beauty of our planet, and promoting sustainable lifestyles. Alongside environmental awareness, greENERGY also emphasizes traditional values and cultural heritage, aiming to create responsible and mindful individuals.
  ### Activities:
  The club undertakes various impactful initiatives and programs, such as:
  Nature Walks & Photography – encouraging students to explore and capture biodiversity.
  Eco-Friendly Campaigns – reducing plastic use and promoting green alternatives.
  Organic & Natural Food Drives – spreading awareness about the benefits of natural and chemical-free products.
  Cultural Events – reconnecting youth with traditional values and practices.
  Conservation Projects – tree plantation, clean-up drives, and sustainability workshops.
  ### Why Join?
  By joining greENERGY, students can:
  Become active contributors to environmental conservation.
  Develop eco-friendly habits and promote sustainable living.
  Improve personal health by adopting organic and natural food practices.
  Reconnect with culture and traditional values.
  Be part of a community that works together for a greener, healthier planet.`,
    imageUrl: getRandomPlaceholder(),
  },
  {
    id: 11,
    name: "Soch Club",
    tagline: "“Where Ideas Take Shape”",
    description: `Soch Club is a creative and cultural platform for students, conducting debates, storytelling, talent shows, and various events to showcase their artistic and intellectual abilities. It adds value to the Faculty of Arts and enriches the cultural life of the college.`,
    fullDescription: ` 
  ## About Us
  
  The Soch Club is a vibrant student-driven body that serves as a platform for the entire college community. It provides opportunities for students to express themselves through talent shows, debates, storytelling, and other engaging activities. The club has been actively contributing to the Faculty of Arts and the overall growth of the college by fostering creativity, collaboration, and critical thinking.
  ### Activities:
  The club organizes a wide variety of events and competitions such as:
  Talent Shows – offering students a stage to express their artistic side.
  Debates & Discussions – building confidence, logical reasoning, and articulation.
  Storytelling Events – enhancing creativity and imagination.
  Competitions & Cultural Programs – nurturing collaboration and healthy competition.
  
  ### Why Join?
  By becoming a part of the Soch Club, students can:
  
  Enhance their competitive and collaborative spirit.
  
  Harness skills that contribute to becoming a better and well-rounded person.
  
  Gain leadership, time management, and organizational skills through active participation.
  
  Get a platform to showcase multiple talents and creative expressions.
  
  Be part of an enthusiastic community that values art, culture, and ideas.`,
    imageUrl: getRandomPlaceholder(),
  },
  {
    id: 12,
    name: "Bhavan’s Quiz Club",
    tagline: "“Sharpening Minds, Broadening Horizons”",
    description: `A vibrant club that cultivates knowledge, confidence, and curiosity through quizzing and intellectual engagement.`,
    fullDescription: ` 
  ## About Us
  
  Bhavan’s Quiz Club was established in the academic year 2017–18 (27th February 2018). Since its inception, the club has been dedicated to nurturing a culture of knowledge and awareness among students. It provides a platform where curiosity meets learning, enabling students to keep up with the ever-changing world of economy, technology, culture, and current affairs.
  ### Activities:
  Organizing regular intra-college and inter-college quiz competitions.
  Encouraging participation in national and intercollegiate quizzing events.
  Hosting corporate-level quizzes to extend learning beyond academia.
  Conducting interactive sessions and panel games to improve critical thinking, teamwork, and presence of mind.
  ### Why Join?
  To sharpen your knowledge and awareness of global and national affairs.
  To enhance learning skills, analytical ability, and self-confidence.
  To gain exposure by participating in competitive quizzes beyond the classroom.
  To connect with like-minded peers who share a passion for learning.
  To grow into a well-informed individual ready to excel in academics, career, and life.`,
    imageUrl: getRandomPlaceholder(),
  },
  {
    id: 13,
    name: "The Literary Club",
    tagline: "“ Where Creativity Meets Expression”",
    description: ` A dynamic platform that fosters creativity, critical thinking, and a passion for literature among students.`,
    fullDescription: ` 
  ## About Us
  
  The Literary Club is dedicated to nurturing creativity, imagination, and intellectual curiosity among students. It provides a space for young minds to voice their thoughts, opinions, and perspectives while encouraging them to engage in meaningful literary activities. The club serves as a hub for expression, dialogue, and appreciation of the written and spoken word.
  ### Activities:
  Organizing debates, discussions, and elocution competitions.
  Hosting creative writing, poetry, and storytelling sessions.
  Conducting literary festivals, quizzes, and book reviews.
  Encouraging student publications, newsletters, and wall magazines.
  ### Why Join?
  To develop communication skills and confidence in self-expression.
  To foster creativity and critical thinking through literary pursuits.
  To explore diverse genres of literature and broaden perspectives.
  To connect with peers who share a love for reading, writing, and the arts.
  To enhance personal growth by cultivating articulation, imagination, and cultural awareness. `,
    imageUrl: getRandomPlaceholder(),
  },
  {
    id: 14,
    name: "AIMS (All Intellectual Minds) – The M.Com Club",
    tagline: "“ Empowering Commerce Minds for Tomorrow”",
    description: ` A professional club dedicated to enhancing the skills, knowledge, and overall growth of M.Com students.`,
    fullDescription: ` 
  ## About Us
  
  AIMS (All Intellectual Minds) – The M.Com Club was established in December of the academic year 2019–20 under the Department of Commerce. It was created to meet the academic, professional, and personal development needs of M.Com students, offering them a platform to grow beyond the classroom.
  ### Activities:
  Organizing seminars, workshops, and guest lectures by industry experts.
  Conducting management fests, business quizzes, and case study competitions.
  Encouraging teamwork through group discussions and presentations.
  Hosting skill-development sessions focused on leadership, communication, and problem-solving.
  ### Why Join?
  To gain exposure to real-world commerce and management practices.
  
  To build essential professional and leadership skills.
  
  To enhance problem-solving and decision-making abilities.
  
  To connect with peers and mentors for knowledge sharing and growth.
  
  To prepare for careers in commerce, business, and management with confidence.`,
    imageUrl: getRandomPlaceholder(),
  },
  {
    id: 15,
    name: "Vyoma – The Bhavan’s Astronomy Club",
    tagline: "“ Exploring the Universe, One Star at a Time”",
    description: ` An astronomy club that inspires curiosity about the cosmos and nurtures scientific learning through exploration, observation, and research..`,
    fullDescription: ` 
  ## About Us
  
  “Vyoma” – The Bhavan’s Astronomy Club was launched on 3rd December 2021 by the Department of Physics and Electronics. The inauguration was graced by Vice Chairman Air Commodore (Retd) JLN Sastry (VSM), Principal Prof. Y. Ashok, Vice Principal Mrs. B. Niraimathi, and Chief Guest Dr. J. Rukmini, former Head of the Department of Astronomy, Osmania University. The club was established to ignite curiosity and provide a platform for students and faculty to engage in astronomical exploration.
  ### Activities:
  Learning sessions on celestial objects and cosmic phenomena.
  Sky-watching events and telescope-based observations.
  Knowledge-sharing meets between faculty, students, and experts.
  Training in modern astronomical techniques and observational skills.
  Participation in collaborative scientific research, including Citizen Science projects with Pune Knowledge Cluster and the International Amateur Astronomical Association.
  
  ### Why Join?
  To explore the wonders of the universe and deepen your understanding of astronomy and astrophysics.
  To develop hands-on observational skills using advanced tools and techniques.
  To engage in collaborative research and contribute to citizen science initiatives.
  To connect with astronomy enthusiasts, faculty, and experts in the field.
  To nurture scientific curiosity and critical thinking beyond classroom learning.`,
    imageUrl: getRandomPlaceholder(),
  },
  {
    id: 16,
    name: "The Sithram Club – The Film Club",
    tagline: "“ Where Stories Come Alive on Screen.”",
    description: ` A creative platform for students to explore the art of storytelling and filmmaking through workshops, discussions, and competitions.`,
    fullDescription: ` 
  ## About Us
  
  The Sithram Club celebrates storytelling, one of the most ancient and powerful art forms, and its modern adaptation—cinema. Over the years, filmmaking has become one of the most impactful mediums of mass entertainment. Sithram, the film club, provides students with opportunities to learn, practice, and showcase the diverse crafts of filmmaking. By hosting engaging workshops, insightful discussions, and exciting competitions, the club nurtures creativity and passion for cinema.
  ### Activities:
  The Sithram Club functions with an organizing committee that plans events well in advance, ensuring smooth coordination with BA students. The club plays a key role in helping students understand the art of storytelling and filmmaking while also educating them on how to critically watch and appreciate cinema.
  ### Why Join?
  To gain practical exposure to the art and techniques of filmmaking.
  To participate in workshops and competitions that refine creativity.
  To enhance critical appreciation of cinema as both an art form and a medium of communication.
  To collaborate with peers and bring stories to life on screen.
  To build skills that can shape future filmmakers and storytellers.`,
    imageUrl: getRandomPlaceholder(),
  },
];

export default clubsData;
