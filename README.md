# Sổ tay dùng Claude

Trang hướng dẫn một trang, viết bằng Next.js (App Router), style "sổ tay sticker":
màu pastel phẳng, viền đậm, bóng đổ cứng, không gradient.

## Chạy thử trên máy

Cần Node.js 20.9 trở lên.

```bash
npm install
npm run dev
```

Mở http://localhost:3000

## Đổi tên cho đúng người

Mở `app/noi-dung.ts`, sửa hai dòng đầu:

```ts
export const TEN_EM = "[Tên em]";  // tên người yêu, hiện ở đầu trang
export const TEN_TO = "[Tên tớ]";  // tên bạn, hiện ở lời nhắn cuối trang
```

Các lời nhờ mẫu (prompt) cũng nằm trong file này. Chữ nào để trong `[ngoặc vuông]`
sẽ tự được tô màu trên trang để nhắc "chỗ này tự điền".

## Đưa lên mạng

Cách dễ nhất là đẩy thư mục này lên GitHub rồi import vào Vercel
(vercel.com › Add New › Project). Không cần cấu hình gì thêm.

## Cấu trúc

```
app/
  layout.tsx            font + metadata
  page.tsx              toàn bộ nội dung trang
  globals.css           màu, chữ, bố cục (có phần riêng cho điện thoại)
  noi-dung.ts           tên + lời nhờ mẫu, sửa nhanh ở đây
  icon.svg              icon tab trình duyệt (mặt mèo)
  components/
    CopyButton.tsx      nút "Sao chép"
    PromptBuilder.tsx   "Máy ghép prompt"
    Say.tsx             bong bóng lời nhờ, tô màu chỗ cần điền
    Doodles.tsx         mèo, ngôi sao, trái tim, icon (SVG vẽ tay)
```

## Font

Baloo 2 (tiêu đề), Nunito (chữ thường), Patrick Hand (chữ viết tay).
Cả ba đều có bộ chữ tiếng Việt và được tự host qua gói `@fontsource`,
nên trang không phải gọi tới Google Fonts khi chạy.

## Ảnh chụp màn hình

Ảnh claude.ai nằm trong `public/anh/`, hiển thị qua `app/components/Shot.tsx`.
Khi claude.ai đổi giao diện: chụp lại, giữ nguyên tên file, ghi đè là xong.
Nhớ che tên, email, lịch sử chat trước khi chụp (xem `SPEC.md`).

## Lưu ý về nội dung

Đường đi trong app Claude (Customize › Skills, Customize › Connectors,
Customize › Plugins...) được ghi theo support.claude.com vào tháng 11/2026.
App có thể đổi tên nút sau này, khi đó sửa lại trong `app/page.tsx`.
