"use client";

export function HeroPromptToAppV21() {
  return (
    <div className="mx-auto w-full max-w-[1180px]">
      <div
        className="relative w-full overflow-hidden rounded-[28px] border border-black/[0.06]"
        style={{ background: "#FBFAF5" }}
      >
        <div className="flex h-10 items-stretch border-b border-black/[0.05] px-2 md:h-12">
          {["Text", "Text", "Text"].map((label, i) => (
            <div
              key={i}
              className="flex flex-1 items-center justify-center text-[13px] text-black/30"
              style={{
                borderRight:
                  i < 2 ? "1px solid rgba(0,0,0,0.05)" : "none",
              }}
            >
              {label}
            </div>
          ))}
          <div className="flex-[6]" />
        </div>

        <div className="flex aspect-[16/9] w-full">
          <div className="flex-[1.2] p-4 md:p-6">
            <div
              className="h-[110px] w-full rounded-2xl md:h-[140px]"
              style={{ background: "#FAFAF6" }}
            />
          </div>
          <div
            className="w-[56px] md:w-[72px]"
            style={{ background: "#E9E7DD" }}
          />
          <div
            className="flex-[3]"
            style={{ background: "#F2F0E8" }}
          />
        </div>
      </div>
    </div>
  );
}
