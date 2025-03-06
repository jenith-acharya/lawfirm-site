import Breadcrumbnavigation from "../../components/breadcrumb navigation/breadcrumb component";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Kumar Sharma Acharya",
      role: "Senior Partner",
      expertise: "Expert in Arbitration & International Law",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
      email: "kumar@yourlawfirm.com",
    },
    {
      name: "Radha Sharma Acharya",
      role: "Senior Partner",
      expertise: "Specialist in Family & Property Law",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
      email: "radha@yourlawfirm.com",
    },
    {
      name: "Prerana Basnet Acharya",
      role: "Partner & Head of Corporate",
      expertise: "Strategist in Business & Compliance",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
      email: "prerana@yourlawfirm.com",
    },
  ];

  return (
    <>
      <Breadcrumbnavigation>Our Team</Breadcrumbnavigation>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-red-800">Meet Our Legal Experts</h1>
          <p className="text-center text-gray-600 mt-2">
            Experienced professionals dedicated to your success.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-red-800 text-white shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-56 object-cover rounded-md"
                />
                <h2 className="text-xl font-semibold mt-4">{member.name}</h2>
                <p className="text-gray-200">{member.role}</p>
                <p className="text-sm text-gray-300 mt-2">{member.expertise}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="block mt-4 text-white font-medium underline hover:text-gray-300 transition"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
