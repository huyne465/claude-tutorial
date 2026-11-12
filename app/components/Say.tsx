import { Fragment } from "react";

type Props = {
  text: string;
  className?: string;
};

/**
 * Hiển thị một lời nhờ mẫu. Phần nằm trong [ngoặc vuông]
 * được tô màu để nhắc: "chỗ này cậu tự điền nha".
 */
export function Say({ text, className = "say" }: Props) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <p className={className}>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <mark key={i} className="fill">
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </p>
  );
}
