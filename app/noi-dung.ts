// ============================================================
//  NỘI DUNG CÓ THỂ SỬA NHANH
//  Đổi tên ở đây là cả trang cập nhật theo.
// ============================================================

/** Tên người yêu, hiện ở đầu trang ("làm riêng cho ...") */
export const TEN_EM = "An";

/** Tên của bạn, hiện ở lời nhắn cuối trang */
export const TEN_TO = "Gia Huy bel";

/** Tháng cập nhật các đường đi trong app (ghi ở cuối trang) */
export const CAP_NHAT = "tháng 11/2026";

/**
 * Các lời nhờ mẫu. Chữ nằm trong [ngoặc vuông] sẽ được tô vàng
 * trên trang để nhắc là chỗ cần tự điền.
 */
export const PROMPTS = {
  good:
    "Mình là sinh viên năm 2 ngành Marketing. Mình cần dàn ý cho bài luận 1500 chữ về tác động của mạng xã hội tới thói quen mua sắm của giới trẻ. Người chấm là cô giáo khá khó tính, thích lập luận có ví dụ thực tế. Bạn trình bày bằng gạch đầu dòng, mỗi ý chính kèm một ví dụ nhé.",
  tim:
    "Mình phải viết bài luận về [đề bài]. Gợi ý cho mình 5 hướng tiếp cận khác nhau, mỗi hướng 2 câu, kèm điểm mạnh và điểm yếu của từng hướng.",
  danY:
    "Mình chọn hướng số [mấy]. Lập dàn ý chi tiết: mở bài, 3 luận điểm chính, kết bài. Với mỗi luận điểm, gợi ý loại dẫn chứng mình nên đi tìm.",
  bi:
    "Mình đang bí ở đoạn [đoạn nào]. Đừng viết hộ mình nhé, chỉ hỏi mình 3 câu gợi mở để mình tự nghĩ tiếp.",
  gopY:
    "Đây là bài nháp của mình (dán bên dưới). Bạn đóng vai giáo viên chấm bài khó tính: chỉ ra 3 chỗ lập luận yếu nhất và giải thích vì sao. Chưa cần sửa giúp mình.",
  sua:
    "Sửa lỗi chính tả và làm câu văn trong đoạn này mượt hơn, nhưng giữ nguyên giọng văn và ý của mình. Liệt kê những chỗ bạn đã sửa để mình xem lại.",
  ppt:
    "Làm cho mình file PowerPoint khoảng 8 trang tóm tắt bài luận này, mỗi trang ít chữ thôi.",
  drive:
    "Tìm trong Google Drive của mình file đề cương môn [tên môn] và tóm tắt yêu cầu của bài luận cuối kỳ.",
  lich:
    "Xem lịch Google Calendar tuần này của mình và gợi ý những khoảng trống để ngồi viết luận.",
  notion:
    "Đọc trang Notion “[tên trang]” và sắp xếp lại ghi chú trong đó thành dàn ý.",
  hoi:
    "Mình không rành công nghệ lắm. Chỉ mình cách [việc muốn làm, ví dụ: nối Claude với Google Drive] trên [máy Mac / máy Windows / iPhone / điện thoại Android]. Mỗi lần chỉ nói một bước thôi, đợi mình làm xong và nhắn “xong” rồi mới nói bước tiếp theo nhé.",
} as const;

/** Giá trị điền sẵn trong "Máy ghép prompt" */
export const MAU_GHEP = {
  role: "sinh viên năm 2 ngành Marketing",
  task: "một dàn ý cho bài luận 1500 chữ về mạng xã hội và thói quen mua sắm của giới trẻ",
  audience: "cô giáo chấm bài, thích lập luận có ví dụ thực tế",
  format: "bằng gạch đầu dòng, mỗi ý chính kèm một ví dụ",
};
