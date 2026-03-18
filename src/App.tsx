import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import TopicDetailPage from './pages/TopicDetailPage'
import PracticePage from './pages/PracticePage'
import ProgressPage from './pages/ProgressPage'
import ProtectedRoute from './components/auth/ProtectedRoute'

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/topic/:topicId" element={<TopicDetailPage />} />
          <Route path="/topic/:topicId/practice" element={<PracticePage />} />
          <Route path="/progress" element={<ProtectedRoute><ProgressPage /></ProtectedRoute>} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}
