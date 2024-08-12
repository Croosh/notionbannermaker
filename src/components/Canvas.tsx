import React, { forwardRef, useContext, useEffect } from "react";
import { DataContext } from "../lib/context";

const Canvas = forwardRef<HTMLCanvasElement, React.ComponentProps<"canvas">>(
  function MyCanvas(props, ref) {
    const context = useContext(DataContext);
    const bannerSize = {
      w: 1500,
      h: 600,
    };
    const getSize = (size: string) => {
      switch (size) {
        case "S":
          return 40;
        case "M":
          return 70;

        case "L":
          return 90;
        default:
          return 120;
      }
    };
    const getFont = (font: string) => {
      switch (font) {
        case "serif":
          return "Garamond";
        case "sans-serif":
          return "Inter";
        case "handwriting":
          return "Segoe Script";
        default:
          return "Arial";
      }
    };
    useEffect(() => {
      if (ref && typeof ref !== "function" && ref.current) {
        const canvas = ref.current;
        const ctx = canvas.getContext("2d");
        window.devicePixelRatio = 2;

        if (ctx) {
          const scale = window.devicePixelRatio || 1;
          canvas.width = Math.floor(bannerSize.w * scale);
          canvas.height = Math.floor(bannerSize.h * scale);

          ctx.scale(scale, scale);

          // Set background color
          const backgroundColor = context?.data.background.color || "#FFFFFF";
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(0, 0, bannerSize.w + 100, bannerSize.h + 100);
          const secondaryText = context?.data.texts.secondary?.text || "";

          // Primary Text
          const primaryText = context?.data.texts.primary?.text || "";
          ctx.font = `normal normal bold ${getSize(
            context?.data.texts.primary?.size as string
          )}px '${getFont(context?.data.texts.primary?.font as string)}'`;
          ctx.fillStyle = context?.data.texts.primary?.color || "#000000";
          const ptextWidth = ctx.measureText(primaryText).width;
          const px = (bannerSize.w - ptextWidth) / 2;
          let py: number;
          if (secondaryText !== "") {
            py = bannerSize.h / 2;
          } else {
            py = bannerSize.h / 2 + 40;
          }
          console.log(ctx.font);
          ctx.fillText(primaryText, px, py);

          // Secondary Text
          ctx.font = `normal normal  ${getSize(
            context?.data.texts.secondary?.size as string
          )}px '${getFont(context?.data.texts.secondary?.font as string)}'`;
          ctx.fillStyle = context?.data.texts.secondary?.color || "#000000";
          const stextWidth = ctx.measureText(secondaryText).width;
          const sx = (bannerSize.w - stextWidth) / 2;
          const sy = bannerSize.h / 2 + 70;
          console.log(ctx.font);

          ctx.fillText(secondaryText, sx, sy);
        }
      }
    }, [
      bannerSize.h,
      bannerSize.w,
      context?.data.background.color,
      context?.data.texts.primary?.color,
      context?.data.texts.primary?.font,
      context?.data.texts.primary?.size,
      context?.data.texts.primary?.text,
      context?.data.texts.secondary?.color,
      context?.data.texts.secondary?.font,
      context?.data.texts.secondary?.size,
      context?.data.texts.secondary?.text,
      ref,
    ]);

    return (
      <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
        <canvas
          ref={ref}
          className=" w-full h-auto aspect-[2.5/1]"
          {...props}
        />
      </div>
    );
  }
);

export default Canvas;
