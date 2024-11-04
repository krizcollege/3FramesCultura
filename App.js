import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import LoginPage from './components/loginFrame';
import RegistrationPage from './components/registrationFrame';
import PasswordRecoveryPage from './components/recoveryFrame';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onSwitch={() => setCurrentPage('recovery')} onRegister={() => setCurrentPage('register')} />;
      case 'register':
        return <RegistrationPage onSwitch={() => setCurrentPage('login')} />;
      case 'recovery':
        return <PasswordRecoveryPage onSwitch={() => setCurrentPage('login')} />;
      default:
        return <LoginPage onSwitch={() => setCurrentPage('recovery')} onRegister={() => setCurrentPage('register')} />;
    }
  };

  return (
    <PaperProvider>
      {renderPage()}
    </PaperProvider>
  );
};

export default App;