import React, { createContext, useContext, useState } from 'react';
import { User, UserRole } from '../types';
import { MOCK_USERS } from '../constants/mockData';

interface AuthRoleContextType {
  currentRole: UserRole;
  currentUser: User | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  switchRole: (role: UserRole, defaultTab?: string) => void;
  logout: () => void;
}

const AuthRoleContext = createContext<AuthRoleContextType | undefined>(undefined);

export const AuthRoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRole, setCurrentRole] = useState<UserRole>('PUBLIC');
  const [activeTab, setActiveTab] = useState<string>('landing');

  // Map roles to mock users
  const getUserForRole = (role: UserRole): User | null => {
    switch (role) {
      case 'STUDENT': return MOCK_USERS.student;
      case 'MENTOR': return MOCK_USERS.mentor;
      case 'ORG_ADMIN': return MOCK_USERS.org_admin;
      case 'RECRUITER': return MOCK_USERS.recruiter;
      case 'SUPER_ADMIN': return MOCK_USERS.super_admin;
      case 'ADDITIONAL_ADMIN': return MOCK_USERS.additional_admin;
      default: return null;
    }
  };

  const switchRole = (role: UserRole, defaultTab?: string) => {
    setCurrentRole(role);
    if (defaultTab) {
      setActiveTab(defaultTab);
    } else {
      if (role === 'PUBLIC') setActiveTab('landing');
      else setActiveTab('dashboard');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const logout = () => {
    setCurrentRole('PUBLIC');
    setActiveTab('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentUser = getUserForRole(currentRole);

  return (
    <AuthRoleContext.Provider 
      value={{ 
        currentRole, 
        currentUser, 
        activeTab, 
        setActiveTab, 
        switchRole, 
        logout 
      }}
    >
      {children}
    </AuthRoleContext.Provider>
  );
};

export const useAuthRole = () => {
  const context = useContext(AuthRoleContext);
  if (!context) {
    throw new Error('useAuthRole must be used within an AuthRoleProvider');
  }
  return context;
};
