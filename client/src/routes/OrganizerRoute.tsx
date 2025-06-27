import ProtectedRoute from "@/components/auth/ProtectedRoute"
import DashboardLayout from "@/components/organizer/layout/DashboardLayout"
import Analytics from "@/pages/organizer/Analytics"
import AttendeeManagement from "@/pages/organizer/AttendeeManagement"
import Communications from "@/pages/organizer/Communications"
import CreateEvent from "@/pages/organizer/CreateEvent"
import DashboardHome from "@/pages/organizer/DashboardHome"
import EditEvent from "@/pages/organizer/EditEvent"
import EventBranding from "@/pages/organizer/EventBranding"
import EventManagement from "@/pages/organizer/EventManagement"
import PayoutSection from "@/pages/organizer/PayoutSection"
import PostEventActions from "@/pages/organizer/PostEventActions"
import ProfileManagement from "@/pages/organizer/ProfileManagement"
import TicketingInterface from "@/pages/organizer/TicketingInterface"
import { Navigate, Route, Routes } from "react-router-dom"

const OrganizerRoute = () => {
  return (
    <Routes>
      
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<ProtectedRoute requiredRole="organizer"><DashboardHome /></ProtectedRoute>} />
          <Route path="/events" element={<ProtectedRoute requiredRole="organizer"><EventManagement /></ProtectedRoute>} />
          <Route path="/events/create" element={<ProtectedRoute requiredRole="organizer"><CreateEvent /></ProtectedRoute>} />
          <Route path="/events/edit/:id" element={<ProtectedRoute requiredRole="organizer"><EditEvent /></ProtectedRoute>} />
          <Route path="/ticketing" element={<ProtectedRoute requiredRole="organizer"><TicketingInterface /></ProtectedRoute>} />
          <Route path="/attendees" element={<ProtectedRoute requiredRole="organizer"><AttendeeManagement /></ProtectedRoute>} />
          <Route path="/analytics" element={<ProtectedRoute requiredRole="organizer"><Analytics /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute requiredRole="organizer"><ProfileManagement /></ProtectedRoute>} />
          <Route path="/branding" element={<ProtectedRoute requiredRole="organizer"><EventBranding /></ProtectedRoute>} />
          <Route path="/communications" element={<ProtectedRoute requiredRole="organizer"><Communications /></ProtectedRoute>} />
          <Route path="/payouts" element={<ProtectedRoute requiredRole="organizer"><PayoutSection /></ProtectedRoute>} />
          <Route path="/post-event" element={<ProtectedRoute requiredRole="organizer"><PostEventActions /></ProtectedRoute>} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  )
}

export default OrganizerRoute
