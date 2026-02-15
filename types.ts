
import React from 'react';

export interface Requirement {
  id: string;
  category: string;
  feature: string;
  priority: 'High' | 'Medium' | 'Low';
  description: string;
}

export interface Vendor {
  name: string;
  setupCost: number;
  monthlyPerUser: number;
  extDependency: string;
  score: number;
  notes: string;
}

export interface SectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
}