import { useState } from 'react';
import { Menu, Users, BookOpen, Briefcase, Plus, Edit2, Trash2 } from 'lucide-react';

interface Member {
  id: number;
  name: string;
  title: string;
  email: string;
  phone: string;
  photo: string;
  description: string;
}

interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
}

interface Practice {
  id: number;
  name: string;
  description: string;
}

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState<'team' | 'blogs' | 'practices'>('team');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Sample data
  const [members, setMembers] = useState<Member[]>([
    {
      id: 1,
      name: "Jenith Sharma Acharya",
      title: "Senior Developer",
      email: "jenithacharya8@gmail.com",
      phone: "+977 9866660289",
      photo: "jenith.png",
      description: "Experienced developer with 10 years of experience"
    }
  ]);

  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: 1,
      title: "Getting Started with React",
      description: "Learn the basics of React",
      author: "Jenith Sharma Acharya",
      date: "2025-01-28"
    }
  ]);

  const [practices, setPractices] = useState<Practice[]>([
    {
      id: 1,
      name: "Web Development",
      description: "Full stack web development services"
    }
  ]);

  const renderModal = () => {
    if (!isModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">
            {editingItem ? 'Edit Item' : 'Create New Item'}
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name/Title</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter name or title"
              />
            </div>
            {activeSection === 'team' && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded"
                    placeholder="Enter phone number"
                  />
                </div>
              </>
            )}
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                className="w-full p-2 border rounded"
                rows={4}
                placeholder="Enter description"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-900"
              >
                {editingItem ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    let content;
    
    switch (activeSection) {
      case 'team':
        content = (
          <div className="space-y-4">
            {members.map(member => (
              <div key={member.id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.title}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setEditingItem(member);
                      setIsModalOpen(true);
                    }}
                    className="p-2 text-red-800 hover:bg-red-50 rounded"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button className="p-2 text-red-800 hover:bg-red-50 rounded">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
        break;
      
      case 'blogs':
        content = (
          <div className="space-y-4">
            {blogs.map(blog => (
              <div key={blog.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{blog.title}</h3>
                    <p className="text-sm text-gray-600">{blog.description}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      By {blog.author} on {blog.date}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setEditingItem(blog);
                        setIsModalOpen(true);
                      }}
                      className="p-2 text-red-800 hover:bg-red-50 rounded"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 text-red-800 hover:bg-red-50 rounded">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
        break;
      
      case 'practices':
        content = (
          <div className="space-y-4">
            {practices.map(practice => (
              <div key={practice.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{practice.name}</h3>
                    <p className="text-sm text-gray-600">{practice.description}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setEditingItem(practice);
                        setIsModalOpen(true);
                      }}
                      className="p-2 text-red-800 hover:bg-red-50 rounded"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 text-red-800 hover:bg-red-50 rounded">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
        break;
    }

    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {activeSection === 'team' && 'Team Members'}
            {activeSection === 'blogs' && 'Blog Posts'}
            {activeSection === 'practices' && 'Areas of Practice'}
          </h2>
          <button
            onClick={() => {
              setEditingItem(null);
              setIsModalOpen(true);
            }}
            className="flex items-center space-x-2 bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-900"
          >
            <Plus size={16} />
            <span>Add New</span>
          </button>
        </div>
        {content}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-xl font-bold flex items-center">
            <Menu className="mr-2" /> Admin Panel
          </h1>
        </div>
        <nav className="mt-4">
          <button
            onClick={() => setActiveSection('team')}
            className={`flex items-center space-x-2 w-full px-4 py-2 text-left ${
              activeSection === 'team' ? 'bg-red-50 text-red-800' : 'hover:bg-gray-50'
            }`}
          >
            <Users size={20} />
            <span>Team Members</span>
          </button>
          <button
            onClick={() => setActiveSection('blogs')}
            className={`flex items-center space-x-2 w-full px-4 py-2 text-left ${
              activeSection === 'blogs' ? 'bg-red-50 text-red-800' : 'hover:bg-gray-50'
            }`}
          >
            <BookOpen size={20} />
            <span>Blogs</span>
          </button>
          <button
            onClick={() => setActiveSection('practices')}
            className={`flex items-center space-x-2 w-full px-4 py-2 text-left ${
              activeSection === 'practices' ? 'bg-red-50 text-red-800' : 'hover:bg-gray-50'
            }`}
          >
            <Briefcase size={20} />
            <span>Areas of Practice</span>
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {renderContent()}
      </div>

      {/* Modal */}
      {renderModal()}
    </div>
  );
};

export default AdminPanel;
