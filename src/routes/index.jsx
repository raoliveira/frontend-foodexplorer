import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import { AdminRoutes } from './admin.routes';
import { UsersRoutes } from "./users.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user ? (
        user.isAdmin == true ? (
          <AdminRoutes />
        ) : (
          <UsersRoutes />
        )
      ) : (
        <AuthRoutes />
      )}
    </BrowserRouter>
  );
}
