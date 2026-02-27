import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TaskList from './components/TaskList';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const App = () => {
  const isLoggedIn = useSelector((state: any) => !!state.user.userInfoTh);

  return (
    <Routes>
      <Route path="/" element={!isLoggedIn ? <LoginForm /> : <Navigate to="/dashboard" />} />
      <Route path="/signup" element={!isLoggedIn ? <SignupForm /> : <Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={isLoggedIn ? <TaskList /> : <Navigate to="/" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
