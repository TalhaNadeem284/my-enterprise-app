import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const UserForm = lazy(() => import('../pages/forms/UserForm'));
const ProductForm = lazy(() => import('../pages/forms/ProductForm'));

const RoutesComponent = () => (
  <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
    <Routes>
      <Route path="/" element={<Navigate to="/forms/user" replace />} />
      <Route
        path="/forms/user"
        element={
          <ProtectedRoute>
            <UserForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/forms/product"
        element={
          <ProtectedRoute>
            <ProductForm />
          </ProtectedRoute>
        }
      />
    </Routes>
  </Suspense>
);

export default RoutesComponent;