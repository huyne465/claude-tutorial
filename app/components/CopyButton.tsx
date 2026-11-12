"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "./Doodles";

type Props = {
  text: string;
  /** Nút trắng, dùng khi nằm trên nền vàng */
  onButter?: boolean;
};

// Dự phòng cho trình duyệt cũ hoặc khi mở trang qua http thường
function fallbackCopy(text: string) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  document.body.removeChild(area);
  return ok;
}

export function CopyButton({ text, onButter }: Props) {
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      ok = fallbackCopy(text);
    }
    if (!ok) return;
    setDone(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setDone(false), 1800);
  }

  return (
    <>
      <button
        type="button"
        className={`btn btn-copy${onButter ? " on-butter" : ""}`}
        data-done={done}
        onClick={copy}
      >
        {done ? <CheckIcon /> : <CopyIcon />}
        {done ? "Đã chép rồi!" : "Sao chép"}
      </button>
      <span className="sr-only" role="status">
        {done ? "Đã sao chép lời nhờ" : ""}
      </span>
    </>
  );
}
