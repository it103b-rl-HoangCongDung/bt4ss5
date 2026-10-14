/**
 * Bài tập: Bài 4 - Session 5
 * Môn học: [RL-IT103B-K25] - Xây dựng ứng dụng web với Javascript
 * GitHub Organization: it103b-rl-HoangCongDung
 * Mô tả: Chuẩn hóa việc cắt mã hồ sơ bệnh nhân chỉ sử dụng .slice()
 */

// Hàm chuẩn hóa mã hồ sơ bệnh nhân sử dụng .slice()
function chuanHoaMaBenhNhan(maHoSo) {
    if (typeof maHoSo !== 'string' || maHoSo.trim() === '') {
        console.error('Lỗi: Mã hồ sơ không hợp lệ!');
        return null;
    }

    const maSach = maHoSo.trim();
    
    // Giả sử mã hồ sơ có dạng 'MED-2023-8888'
    // Lấy phần tiền tố (3 ký tự đầu)
    const prefix = maSach.slice(0, 3);
    
    // Lấy 4 ký tự số cuối cùng dùng chỉ số âm cực kỳ tiện lợi của .slice()
    const idNumber = maSach.slice(-4);

    return {
        original: maSach,
        prefix: prefix,
        idNumber: idNumber,
        standardizedCode: prefix + '-' + idNumber
    };
}

// Kiểm tra thử nghiệm với các trường hợp biên
const testCases = [
    'MED-2023-1024',
    'DOC-2024-5555',
    'ER-9999'
];

console.log('--- KẾT QUẢ CHUẨN HÓA MÃ HỒ SƠ BỆNH NHÂN ---');
testCases.forEach((code, index) => {
    console.log('Test case ' + (index + 1) + ':', chuanHoaMaBenhNhan(code));
});
