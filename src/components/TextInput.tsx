import {
  ButtonGroup,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { DataContext } from "../lib/context";
import { AArrowUp, SwatchBook, Type } from "lucide-react";
import { HexColorPicker } from "react-colorful";
import { textFonts, textSizes } from "../lib/utils";

function TextInput({ type }: { type: "primary" | "secondary" }) {
  const context = useContext(DataContext);
  const [ptColor, setPTColor] = useState(context?.data.texts.primary?.color);
  const [stColor, setSTColor] = useState(context?.data.texts.secondary?.color);
  const [currentPFont, setCurrentPFontIndex] = useState(0);
  const [currentSFont, setCurrentSFontIndex] = useState(0);
  const [currentPSize, setCurrentPSizeIndex] = useState(0);
  const [currentSSize, setCurrentSSizeIndex] = useState(0);

  const handlePFontChange = () => {
    setCurrentPFontIndex((prevIndex) => (prevIndex + 1) % textFonts.length);
    context?.setData({
      ...context.data,
      texts: {
        ...context.data.texts,
        primary: {
          ...context.data.texts.primary,
          font: textFonts[currentPFont],
        },
      },
    });
  };
  const handleSFontChange = () => {
    setCurrentSFontIndex((prevIndex) => (prevIndex + 1) % textFonts.length);
    context?.setData({
      ...context.data,
      texts: {
        ...context.data.texts,
        secondary: {
          ...context.data.texts.secondary,
          font: textFonts[currentSFont],
        },
      },
    });
  };
  const handlePSizeChange = () => {
    setCurrentPSizeIndex((prevIndex) => (prevIndex + 1) % textSizes.length);
    context?.setData({
      ...context.data,
      texts: {
        ...context.data.texts,
        primary: {
          ...context.data.texts.primary,
          size: textSizes[currentPSize],
        },
      },
    });
  };
  const handleSSizeChange = () => {
    setCurrentSSizeIndex((prevIndex) => (prevIndex + 1) % textSizes.length);
    context?.setData({
      ...context.data,
      texts: {
        ...context.data.texts,
        secondary: {
          ...context.data.texts.secondary,
          size: textSizes[currentSSize],
        },
      },
    });
  };
  const handleTextChange = () => {
    if (type == "primary") {
      context?.setData({
        ...context.data,
        texts: {
          ...context.data.texts,
          primary: { ...context.data.texts.primary, color: ptColor },
        },
      });
    } else {
      context?.setData({
        ...context.data,
        texts: {
          ...context.data.texts,
          secondary: { ...context.data.texts.secondary, color: stColor },
        },
      });
    }
  };
  const handleChange = (e: string) => {
    if (type == "primary") {
      context?.setData({
        ...context.data,
        texts: {
          ...context.data.texts,
          primary: {
            ...context.data.texts.primary,
            text: e,
          },
        },
      });
    } else {
      context?.setData({
        ...context.data,
        texts: {
          ...context.data.texts,
          secondary: {
            ...context.data.texts.secondary,
            text: e,
          },
        },
      });
    }
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        <Input
          onChange={(e) => handleChange(e.target.value)}
          className=" p-2 font-inter"
          defaultValue={
            type == "primary"
              ? context?.data.texts.primary?.text
              : context?.data.texts.secondary?.text
          }
          placeholder={type == "primary" ? "Primary Text" : "Secondary Text"}
          variant={"filled"}
        />
        <ButtonGroup className=" flex w-full justify-around items-center">
          <IconButton
            icon={<Type />}
            onClick={() => {
              if (type == "primary") {
                handlePFontChange();
              } else {
                handleSFontChange();
              }
            }}
            aria-label="Font"
            className=" grow"
          />
          <Popover>
            <PopoverTrigger>
              <IconButton
                icon={<SwatchBook />}
                aria-label="Color"
                className=" grow"
              />
            </PopoverTrigger>
            <PopoverContent className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Select Text Color</PopoverHeader>
              <PopoverBody>
                <div className="w-full flex justify-center items-center p-4">
                  <HexColorPicker
                    color={
                      type == "primary"
                        ? context?.data.texts.primary?.color
                        : context?.data.texts.secondary?.color
                    }
                    id="textColorPicker"
                    onChange={(e) => {
                      if (type == "primary") {
                        setPTColor(e);
                      } else {
                        setSTColor(e);
                      }
                      console.log(context?.data);
                      handleTextChange();
                    }}
                    className="resposive"
                  />
                </div>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <IconButton
            icon={<AArrowUp />}
            aria-label="Size"
            onClick={() => {
              if (type == "primary") {
                handlePSizeChange();
              } else {
                handleSSizeChange();
              }
            }}
            className=" grow"
          />
        </ButtonGroup>
      </div>
    </>
  );
}

export default TextInput;
