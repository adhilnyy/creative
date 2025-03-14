import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import ProtectedRoute from "../components/ProtectedRoute"
import ListPage from "../pages/ListPage"
import ContactPage from "../pages/ContactPage"
import NotFound from "../components/NotFound"
import EditPostPage from "../pages/EditPostPage"
import CreatePostPage from "../pages/CreatePostPage"
import Layout from "../components/Layout"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoute />} >
          <Route element={<Layout />}>
              <Route path="/list" element={<ListPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/update/:id" element={<EditPostPage/>} />
              <Route path="/create" element={<CreatePostPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes