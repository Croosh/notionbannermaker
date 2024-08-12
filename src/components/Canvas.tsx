import React, { forwardRef, useContext, useEffect } from "react";
import { DataContext } from "../lib/context";

const Canvas = forwardRef<HTMLCanvasElement, React.ComponentProps<"canvas">>(
  function MyCanvas(props, ref) {
    const context = useContext(DataContext);
    const bannerSize = {
      w: 1500,
      h: 600,
    };

    useEffect(() => {
      if (ref && typeof ref !== "function" && ref.current) {
        const canvas = ref.current;
        const ctx = canvas.getContext("2d");

        if (ctx) {
          const scale = window.devicePixelRatio * 2;
          canvas.width = Math.floor(bannerSize.w * scale);
          canvas.height = Math.floor(bannerSize.h * scale);

          ctx.scale(scale, scale);

          // Set background color
          const backgroundColor = context?.data.background.color || "#FFFFFF";
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(0, 0, bannerSize.w, bannerSize.h);
          const secondaryText = context?.data.texts.secondary?.text || "";

          // Primary Text
          const primaryText = context?.data.texts.primary?.text || "";
          ctx.font = "120px Inter";
          ctx.fillStyle = context?.data.texts.primary?.color || "#000000";
          const ptextWidth = ctx.measureText(primaryText).width;
          const px = (bannerSize.w - ptextWidth) / 2;
          let py: number;
          if (secondaryText !== "") {
            py = bannerSize.h / 2;
          } else {
            py = bannerSize.h / 2 + 40;
          }
          ctx.fillText(primaryText, px, py);

          // Secondary Text
          ctx.font = "60px Inter";
          ctx.fillStyle = context?.data.texts.secondary?.color || "#000000";
          const stextWidth = ctx.measureText(secondaryText).width;
          const sx = (bannerSize.w - stextWidth) / 2;
          const sy = bannerSize.h / 2 + 70;
          ctx.fillText(secondaryText, sx, sy);
        }
      }
    }, [
      bannerSize.h,
      bannerSize.w,
      context?.data.background.color,
      context?.data.texts.primary?.color,
      context?.data.texts.primary?.text,
      context?.data.texts.secondary?.color,
      context?.data.texts.secondary?.text,
      ref,
    ]);

    return (
      <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
        <canvas ref={ref} className="w-[750px] h-[300px]" {...props} />
      </div>
    );
  }
);

export default Canvas;
