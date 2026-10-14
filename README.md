# BÁO CÁO PHÂN TÍCH TRADE-OFF: PHƯƠNG THỨC CHUỖI TÍCH HỢP VÀ CHUẨN HÓA MÃ HỒ SƠ BỆNH NHÂN

> 👤 **Học viên:** Hoàng Công Dũng | **Mã SV:** PTIT-HCM-009
> 🏫 **Môn học:** it103b-rl-HoangCongDung

---

## 1. Mục tiêu và Bối cảnh bài toán

Trong hệ thống y tế kế thừa, việc các lập trình viên sử dụng lẫn lộn các phương thức cắt chuỗi như .slice(), .substring() và đặc biệt là hàm đã bị gắn nhãn Deprecated là .substr() gây ra rất nhiều khó khăn trong việc bảo trì mã nguồn.

Mục tiêu của bài tập này là lập tài liệu chuẩn hóa việc sử dụng .slice(), đồng thời lập bảng so sánh chi tiết các đặc tính kỹ thuật để làm cơ sở cho toàn đội ngũ phát triển áp dụng.

- So sánh chi tiết sự khác nhau giữa các phương thức trích xuất chuỗi con .slice(), .substring() và cảnh báo hàm cũ .substr().
- Lập bảng đối chiếu cách xử lý chỉ số âm và trường hợp start lớn hơn end.
- Xác định phương thức chuẩn mực quốc tế nên dùng trong các dự án hiện đại tuân thủ chuẩn ES6+.

## 2. Phân tích Bảng Trade-off Phương thức Cắt Chuỗi

Dưới đây là bảng phân tích kỹ thuật đối chiếu hai phương thức phổ biến trong JavaScript, giúp làm rõ lý do tại sao .slice() được chọn làm chuẩn cho toàn dự án:

| Đặc điểm | String.prototype.slice(start, end) | String.prototype.substring(start, end) |
| --- | --- | --- |
| Chỉ số âm (Negative Index) | Đếm ngược từ cuối chuỗi (rất tiện lợi và trực quan) | Coi như bằng 0, dễ gây ra lỗi logic ngầm |
| Khi start > end | Trả về chuỗi rỗng '' | Tự động hoán đổi 2 chỉ số cho nhau (gây khó kiểm soát bug) |
| Khuyến nghị chuẩn ES6+ | Nên dùng mặc định vì tính nhất quán cao với Array.prototype.slice | Chỉ dùng khi có lý do đặc biệt tương thích mã cũ |

## 3. Xử lý các trường hợp biên và Cảnh báo hàm .substr()

Hàm .substr(start, length) nhận tham số thứ hai là độ dài thay vì vị trí kết thúc. Hàm này đã bị đưa vào danh sách lỗi thời (Deprecated) trong đặc tả kỹ thuật ECMAScript và không nên xuất hiện trong bất kỳ mã nguồn mới nào.

Khi cắt mã hồ sơ bệnh nhân (ví dụ định dạng 'BN-2023-9999'), việc dùng .slice(-4) để lấy 4 ký tự cuối cùng hoạt động cực kỳ mượt mà nhờ cơ chế hỗ trợ chỉ số âm, trong khi .substring() buộc phải tính toán độ dài chuỗi thủ công.

- Trường hợp biên 1: Chỉ số âm truyền vào .slice() giúp trích xuất nhanh phần đuôi mã định danh.
- Trường hợp biên 2: Khi truyền start > end, .slice() an toàn trả về chuỗi rỗng thay vì âm thầm sửa lỗi như .substring().

## 4. Tổng kết hướng dẫn triển khai mã nguồn

Mã nguồn chuẩn hóa đã được viết và lưu vào tệp solution_ex11.js theo đúng quy định của bài tập. File này thực hiện việc trích xuất và chuẩn hóa mã hồ sơ bệnh nhân, loại bỏ hoàn toàn các hàm cũ và áp dụng triệt để .slice().

---

## 📁 Danh sách tệp tin nộp bài trong Repository
- 📝 `bt4.docx`: Báo cáo tài liệu phân tích nghiệp vụ hoàn chỉnh.
- 💻 `solution_ex11.js`: Mã nguồn chương trình.
