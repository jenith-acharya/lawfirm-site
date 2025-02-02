import Breadcrumb from "../../components/breadcrumb navigation/breadcrumb component";

const OurTeam = () => {
  const teamMembers = [
    {

      name: "Dr.Kumar Sharma Acharya",
      role: "Senior Partner",
      image: "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/461679693_505459262386075_259107169275803097_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=45mY2uTDnUwQ7kNvgHaK8LG&_nc_oc=Adg3CnH6iZNThvNY_osAFNNLRu2v7IHuuIVy0g9dLZEX6chNV60doieYa0TLP-rD_AWIgpIv5dgGq6A8jZWPG8Ku&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=AO_lgulL_so59mU01o4t_1E&oh=00_AYDovy08vleMhMaDGAib6afsqPf4WMrds281dD8F0iaOwg&oe=6784940B", 
      social: {
        linkedin: "#",
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Radha Pant Acharya",
      role: "Senior Partner",
      image: "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/412259096_7417732911579507_4220628337338350331_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=T2_pqTDgUFIQ7kNvgEG9iNz&_nc_oc=AdgEs8pV_I0QvbOixtlpKq2TQ07xgKL9HRnHSdhJ6YYFrMboV_wgjAPk56AG9CSTOUW_6aqc6Np5_r7vJCvKxQ3K&_nc_zt=23&_nc_ht=scontent.fktm8-1.fna&_nc_gid=AZZrc_VcObOwI58TDU0Vcrp&oh=00_AYBmmroy81yd898affyW221OShZMzVyj9UAsPXNQKUHH7Q&oe=67848C60", 
      social: {
        linkedin: "#",
        facebook: "#",
        instagram: "#",
      },
    },
    {
      name: "Prerana Basnet Acharya",
      role: "Head of Corporate",
      image: "https://pbs.twimg.com/profile_images/1418840324005408777/fc72krvI_400x400.jpg", 
      social: {
        linkedin: "#",
        facebook: "#",
        instagram: "#",
      },
    },
    
    
  ];

  return (
   <>
   <Breadcrumb>Our Team</Breadcrumb>
    <div className="bg-white py-12">
      <h2 className="text-center text-4xl font-bold text-gray-900">
        Our <span className="text-red-800">Team</span>
      </h2>
      <div className="flex flex-wrap justify-center mt-10 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border-t-4 border-red-800 rounded-lg max-w-sm p-4 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-lg w-full h-64 object-cover"
            />
            <h3 className="text-xl font-bold mt-4 text-gray-800">
              {member.name}
            </h3>
            <p className="text-red-800 font-semibold">{member.role}</p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-red-800"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href={member.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-red-800"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-red-800"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default OurTeam;
