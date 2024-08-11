import { useContext, useEffect, useRef } from "react";
import { DataContext } from "../lib/context";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const context = useContext(DataContext);
  const bannerSize = {
    w: 1500,
    h: 600,
  };
  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        // Set background color
        ctx.fillStyle = context?.data.background.color as string;
        ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        // Primary Text
        ctx.font = "50px Arial";
        ctx.fillStyle = "#000000";
        const ptext = context?.data.texts.primary?.text as string;
        const ptextWidth = ctx.measureText(ptext).width;
        const px = (canvasRef.current.width - ptextWidth) / 2;
        const py = canvasRef.current.height / 2 + parseInt(ctx.font, 10) / 2;
        ctx.fillText(ptext, px, py - 20);
        // Secondary Text
        ctx.font = "20px Arial";
        ctx.fillStyle = "#000000";
        const stext = context?.data.texts.secondary?.text as string;
        const stextWidth = ctx.measureText(stext).width;
        const sx = (canvasRef.current.width - stextWidth) / 2;
        const sy = canvasRef.current.height / 2 + parseInt(ctx.font, 10) / 2;
        ctx.fillText(stext, sx, sy + 20);
      }
    }
  }, [context?.data]);
  return (
    <div>
      <canvas
        ref={canvasRef}
        width={bannerSize.w / 2}
        height={bannerSize.h / 2}
        style={{ border: "2px solid black" }}
      />
    </div>
  );
};

export default Canvas;
