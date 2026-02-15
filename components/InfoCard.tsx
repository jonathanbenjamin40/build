
import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const InfoCard: React.FC<Props> = ({ title, children, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">{icon}</div>}
        <h4 className="text-lg font-bold text-slate-800">{title}</h4>
      </div>
      <div className="text-slate-600 leading-relaxed text-sm">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
