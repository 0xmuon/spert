import React from 'react';
import CommitteeDetail from './CommitteeDetail';
import './Committee.css';

const committeeMembers = [
  {
    post: 'Chief Patron',
    members: [
      { name: 'Dr. B.K Sethi', college: 'Assistant Professor, SVNIT, Surat' },
      { name: 'Dr. B.K Sethi', college: 'Assistant Professor, SVNIT, Surat' },
      { name: 'Dr. B.K Sethi', college: 'Assistant Professor, SVNIT, Surat' },
    ],
  },
  {
    post: 'Patron',
    members: [
      { name: 'Dr. A. N. Other', college: 'Some College' },
    ],
  },
  {
    post: 'Honorary Chairs',
    members: [
      { name: 'Dr. C. D. Example', college: 'Another College' },
    ],
  },
  // Add more categories and members as needed
];

export default function Committee() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Conference Committee Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {committeeMembers.map((category, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl p-4">
            <h2 className="text-lg font-semibold">{category.post}</h2>
            {category.members.map((member, memberIndex) => (
              <CommitteeDetail
                key={memberIndex}
                MemberPost={category.post}
                MemberName={member.name}
                MemberPostCollege={member.college}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
} 