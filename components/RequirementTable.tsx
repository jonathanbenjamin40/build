
import React from 'react';
import { Check, X, AlertCircle } from 'lucide-react';
import { Requirement } from '../types';

interface Props {
  requirements: Requirement[];
  title: string;
}

const RequirementTable: React.FC<Props> = ({ requirements, title }) => {
  return (
    <div className="mt-8 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
        <h3 className="text-lg font-bold text-slate-800">{title} - טבלת בחינת יכולות</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-slate-50/50 text-slate-500 text-sm uppercase">
              <th className="px-6 py-3 border-b">יכולת / דרישה</th>
              <th className="px-6 py-3 border-b">עדיפות</th>
              <th className="px-6 py-3 border-b">קיים במערכת (V/X)</th>
              <th className="px-6 py-3 border-b">הערות ספק</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {requirements.map((req) => (
              <tr key={req.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-semibold text-slate-700">{req.feature}</div>
                  <div className="text-xs text-slate-400 mt-1">{req.description}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    req.priority === 'High' ? 'bg-red-50 text-red-600' : 
                    req.priority === 'Medium' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {req.priority === 'High' ? 'קריטי' : req.priority === 'Medium' ? 'חשוב' : 'תוספת'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="w-10 h-6 bg-slate-100 rounded-full border border-slate-200"></div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-400 italic">מקום להערה חופשית...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequirementTable;
