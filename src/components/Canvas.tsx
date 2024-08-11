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
        console.log(ref);
        const ctx = ref.current.getContext("2d");
        if (ctx) {
          const backgroundColor = context?.data.background.color || "#FFFFFF";
          const primaryText = context?.data.texts.primary?.text || "";
          const secondaryText = context?.data.texts.secondary?.text || "";

          // Set background color
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(0, 0, ref.current.width, ref.current.height);

          // Primary Text
          ctx.font = "50px Arial";
          ctx.fillStyle = context?.data.texts.secondary?.color as string;
          const ptextWidth = ctx.measureText(primaryText).width;
          const px = (ref.current.width - ptextWidth) / 2;
          const py = ref.current.height / 2 + 50 / 2;
          ctx.fillText(primaryText, px, py - 20);

          // Secondary Text
          ctx.font = "20px Arial";
          ctx.fillStyle = context?.data.texts.primary?.color as string;
          const stextWidth = ctx.measureText(secondaryText).width;
          const sx = (ref.current.width - stextWidth) / 2;
          const sy = ref.current.height / 2 + 20 / 2;
          ctx.fillText(secondaryText, sx, sy + 20);
        }
      }
    }, [
      context?.data.background.color,
      context?.data.texts.primary?.color,
      context?.data.texts.primary?.text,
      context?.data.texts.secondary?.color,
      context?.data.texts.secondary?.text,
      ref,
    ]);

    return (
      <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
        <canvas
          ref={ref}
          width={bannerSize.w / 2}
          height={bannerSize.h / 2}
          {...props}
        />
      </div>
    );
  }
);

export default Canvas;
