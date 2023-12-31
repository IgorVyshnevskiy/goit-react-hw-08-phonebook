import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authorisation/AuthSelectors';

export default function PublicRoute() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={'/contacts'} replace /> : <Outlet />;
}