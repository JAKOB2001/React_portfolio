import emoji from "react-easy-emoji";

/* 1. Main App */
/* 2. Social Networks */
/* 3. Banner Section  */
/* 4. About Section  */
/* 5. Skills Section */
/* 6. Open Source Section  */
/* 7. Projects Section */
/* 8. Experience Section */
/* 9. Contact Section */

/* wrap your text in emoji("") if you want to show emoji in your text

/*=====================
    1. Main App
    Desc: set what's in the document's head section
==========================*/

const app = {
  title: "GRIGALA",
  // Note : consider leaving null if you dont have any head icon
  icon: "ayin_qoph.png",
  description: "An ordinary karachitte Web Developer, Mobile Shutterbug, and Writer.",
};

/*=====================
    2. Social Networks 
    Desc: your social network links
==========================*/

const socialNetworks = {
  //Note : if you dont need or have any social network just add null value
  github: "https://github.com/JAKOB2001",
  linkden: "https://www.linkedin.com/in/iakob-grigalashvili-b891a419a/",
  facebook: "https://www.facebook.com/iakob.grigalashvili.23/",
  instagram: "https://www.instagram.com/grigalashviliiakob/",
  twitter: "https://twitter.com/iakob96268152",
};

/*=====================
    3. Banner Section
    Desc: techfolio logo, greetings, summary and avatar,
==========================*/

const bannerSection = {
  username: "Iakob Grigalashvili",
  bannerHeading: "მოგესალმებით",
  bannerTagLine: emoji(
    "მე ვარ პროგრამისტი, ფრონტ-ენდის დეველოპერი. მე სპეციალიზირებული ვარ HTML, CSS, JavaScript-ში და მაქვს პითონთან მუშაობის გამოცდილება. მე ვიცი როგორ დავაყენო და დააკონფიგურირო Windows სერვერები."
  ),
  //Note:Simply add you avatar image in src/assets/imgs folder 
  //and add the name along with extention e.g xyz.png , abc.svg
  //Note : if you want to use default illustration instead of adding your avatar add defaultAvatar.svg
  bannerAvatar: "avatar.jpg",
  resumeLink:
    "https://drive.google.com/file/d/1ys_dGIsjsfclvGpvoEduI0PesIdpPeQU/view?usp=sharing",
};

/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command 
    line concept so it asked you to add the admin of the command line 
    and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
  admin: "GRIGALA",
  firstCommand: " sudo run about.exe",
  secondCommand: " executing about.exe",
  about:
    "მე ვარ პროგრამისტი, ფრონტ-ენდის დეველოპერი. მე სპეციალიზირებული ვარ HTML, CSS, JavaScript-ში და მაქვს პითონთან მუშაობის გამოცდილება. მე ვიცი როგორ დავაყენო და დააკონფიგურირო Windows სერვერები. ასევე მაქვს CCNA-სთან და Oracle-თან მუშაობის გამოცდილება.",
};

/*=====================
    5. Skils Section
    Desc: This section hep you set your skills 
==========================*/

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  skillsTagLines: [
    "Frontend Development : Hypertext Markup Language (HTML) / Cascading Style Sheets (CSS) / Javascript.",
    "Windows Server Administrator :  Active Directory configuration / windows operating system / Group Policies / Domain Services: DNS, DHCP",
    "Network Administartor : CCNA ( Cisco Routing and Switching ) / LAN, RIP, RIPv2, EIGRP, OSPF, VLAN, VTP, STP, Inter-VLAN Routing / TCP / IPProtocols (UDP, TCP, Telnet, SSH, IMAP4, POP3, ESMTP, TFTP, FTP, HTTP) ",
  ],

  // Recommended : don't add more than 12 skills.
  // Note : go to https://fontawesome.com/icons?d=gallery > select the icon you want to show 
  //        > copy its class > paste it as {fontAwesomeClassname: "fab fa-html5"} in SkillsSet

  skillsSet: [
    {
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      fontAwesomeClassname: "fab fa-js",
    },
    {
      fontAwesomeClassname: "fab fa-react",
    },
    {
      fontAwesomeClassname: "fab fa-node",
    },
    {
      fontAwesomeClassname: "fas fa-server",
    },
    {
      fontAwesomeClassname: "fas fa-network-wired",
    },
    {
      fontAwesomeClassname: "fas fa-desktop",
    },
    {
      fontAwesomeClassname: "fab fa-wordpress",
    },
    {
      fontAwesomeClassname: "fab fa-python",
    },
    {
      fontAwesomeClassname: "fab fa-linux",
    }, 
  ],
};

/*=====================
    6. Open Source Section
    Desc: This section hlep you configure your github repos section 
==========================*/
const openSourceSection = {
  
  //Note :  don't edit the githubToken
  githubToken: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,

  githubUserName: "grigala",
  //Note :  no of open source projects you want to show.
  numberOfRepos: 6,
};

/*=====================
    7. Projects Section
    Desc: This section hlep you configure your major projects.
==========================*/

const projectsSection = {
  projects: [
    {
      projectName: "პროექტის სახელი 1",
      projectBio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

      projectUrl: "",
      stackList: ["React", "Ant Design", "Sass", "Device Detect"],
    },
    {
      projectName: "პროექტის სახელი 2",
      projectBio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

      projectUrl: "/",
      stackList: ["Wordpress", "plugins", "css"],
    },
    {
      projectName: "პროექტის სახელი 3",
      projectBio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

      projectUrl: "/",
      stackList: ["React", "Ant Design", "Sass", "AmCharts", "GeoData"],
    },

    {
      projectName: "პროექტის სახელი 4",
      projectBio:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

      projectUrl: "/",
      stackList: ["Electron", "Python", "Open Cv", "OCR", "Flask"],
    },
  ],
};

/*=====================
    8. Experience Section
    Desc: This section help you configure your experience.
==========================*/

const experienceSection = {
  experiences: [
    {
      experienceTitle: "სამუშაოს დასახელება 1",
      experienceDesc:
        "სამუშაოს აღწერა ახლა წერია რენდომ ტექსტი Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      // Recommended : don't add full date.
      experienceDuration: "12/18-05/19",
      // Recommended : don't add more than 3 tags.
      experienceTags: ["Panacloud", "5 months", "karachi"],
    },
    {
      experienceTitle: "სამუშაოს დასახელება 2",
      experienceDesc:
        "სამუშაოს აღწერა ახლა წერია რენდომ ტექსტი Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      experienceDuration: "10/19-11/19",
      experienceTags: ["Interns Pk", "1.5 month", "Remote"],
    },
    {
      experienceTitle: "სამუშაოს დასახელება 3",
      experienceDesc:
        "სამუშაოს აღწერა ახლა წერია რენდომ ტექსტი Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      experienceDuration: "Current",
      experienceTags: ["ACM", "12/2018-5/2019", "NEDUET"],
    },
  ],
};

/*=====================
    9. Contact Section
    Desc: This section help you configure your contact.
==========================*/

const contactSection = {
  contactTagline:
    "შეგიძლიათ დამიკავშირდეთ",
  // Note : add your all contacts in the contactList seperating with *,* .
  contactList: ["+995599000000", "iakob.grigalashvili.1@btu.edu.ge"],
};


// Bingo :))

export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  skillsSection,
  openSourceSection,
  projectsSection,
  experienceSection,
  contactSection,
};
