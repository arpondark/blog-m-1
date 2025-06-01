import React from 'react'
import ProtectedRoute from '../../../components/ProtectedRoute';

const Analytics = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Analytics</h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <p className="text-gray-600 dark:text-gray-400">Analytics dashboard content goes here.</p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Analytics
