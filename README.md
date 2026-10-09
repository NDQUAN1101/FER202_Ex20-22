# FER202 - Lab Exercises 20, 21 & 22

Dự án thực hành môn **FER202** (Front-End Web Development with React) tích hợp trọn bộ 3 bài tập: **Exercise 20**, **Exercise 21**, và **Exercise 22**.

---

## 📌 Tổng quan các bài tập

### 1. Bài tập 20: Decoupling Route
- **File:** `src/routes.js`, `src/NavigationMenu.js`
- **Mục tiêu:** Tách rời toàn bộ khai báo route thành mảng `routes` độc lập, sinh tự động danh sách `<Route />` thông qua hàm `renderRoutes()`.

### 2. Bài tập 21: Route (ResourceID)
- **File:** `src/data/usersData.js`, `src/data/dishesData.js`, `src/components/UsersPage.js`, `src/components/DishesList.js`, `src/components/DishDetail.js`
- **Mục tiêu:** 
  - Quản lý danh sách Users (`/users`), click vào người dùng chuyển sang `/users/:userId` hiển thị `firstName lastName : age` (ví dụ: `John Smith : 30`).
  - Quản lý thực đơn Dishes (`/dishes`), click vào món ăn chuyển sang `/dishes/:dishId` hiển thị đầy đủ ảnh, tên, giá tiền, nhãn, phân loại và mô tả chi tiết.

### 3. Bài tập 22: Demo about Optional parameters and Link
- **File:** `src/components/CustomNavbar.js`, `src/components/ex22/Pages.js`
- **Thư viện:** `reactstrap`, `bootstrap`, `react-router-dom`
- **Mục tiêu:**
  - Tạo thanh điều hướng `CustomNavbar` bằng `reactstrap` (`Navbar color="dark"`, `NavbarBrand tag={Link} to="/"`, `Nav`, `NavItem`, `NavLink tag={Link}`).
  - Triển khai các component: `Home`, `About`, `Contact`, `Profile`.
  - Hỗ trợ tham số tùy chọn (optional parameters) với route `/profile/:id?`:
    - Truy cập `/profile`: Hiển thị thông báo chưa truyền tham số.
    - Truy cập `/profile/123`: Nhận và hiển thị tham số `ID = 123`.

---

## 🧭 Thanh chuyển đổi bài tập (Exercise Switcher)
Ứng dụng có sẵn thanh chuyển đổi ở đầu trang giúp giảng viên hoặc người chấm bài kiểm tra từng bài tập một cách độc lập và trực quan:
- **Ex 20: Decoupling Route**
- **Ex 21: Route ResourceID**
- **Ex 22: Optional Params & Reactstrap**

---

## 🚀 Hướng dẫn khởi chạy
1. Cài đặt các thư viện cần thiết:
   ```bash
   npm install
   ```
2. Khởi động ứng dụng React:
   ```bash
   npm start
   ```
3. Mở trình duyệt tại: `http://localhost:3000`
