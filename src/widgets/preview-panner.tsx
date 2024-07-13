"use client";
import React from "react";
import Link from "next/link";
import {
  Button,
  IconButton,
  Typography,
  Tooltip,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Tabs,
  TabsHeader,
  Tab,
  Card,
  Chip,
} from "@material-tailwind/react";
import { FaDesktop, FaTabletScreenButton, FaExpand } from "react-icons/fa6";
import { FaMobileAlt, FaRegCopy } from "react-icons/fa";
import { LuExpand } from "react-icons/lu";
import {
  ComputerDesktopIcon,
  DeviceTabletIcon,
  DevicePhoneMobileIcon,
  ArrowsPointingOutIcon,
  ChevronDownIcon,
  EyeIcon,
  CodeBracketIcon,
  Square2StackIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import Iframe from "./layout/ifram";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-markup";
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-tsx");

const fetcher = async (url: string, data: any) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error("Response error:", await response.text()); // Log the error message from the server
    throw new Error("Network response was not ok");
  }

  return response.json();
};

interface PropsType {
  frame: number;
  src: string;
  title: string;
  description: React.ReactNode;
  height?: string;
  isNew?: boolean;
}

export function PreviewPanel({
  frame,
  title,
  description,
  src,
  height,
  isNew,
}: PropsType) {
  const [device, setDevice] = React.useState("desktop");
  const [version, setVersion] = React.useState("react-ts");
  const [mode, setMode] = React.useState("preview");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [isContentLoading, setIsContentLoading] = React.useState(true);

  const [data, setData] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const getCode = async (filePath: string) => {
    setIsLoading(true);

    const response = await fetcher(`/api/read`, { filePath });

    if (response) {
      setData(response.content);
      setIsLoading(false);
    }
  };

  const getFirstCode = React.useCallback(async () => {
    const path1 = `/src/app${src}.tsx`;
    const path = `/src/app${src}/page.tsx`;

    return await getCode(`${path}`);
  }, [src]);

  React.useEffect(() => {
    getFirstCode();
  }, [getFirstCode]);

  React.useEffect(() => {
    if (mode === "preview") {
      const frameElement: any = frames[frame - 1]?.frameElement;

      if (device === "mobile") {
        frameElement.classList.remove("w-full");
        frameElement.style.width = "425px";
      } else if (device === "tablet") {
        frameElement.classList.remove("w-full");
        frameElement.style.width = "768px";
      } else {
        frameElement.classList.add("w-full");
        frameElement.style.width = "100%";
      }
    }
  }, [mode, frame, device]);

  React.useEffect(() => {
    const frameElement: any = frames[frame - 1].frameElement;

    frameElement.addEventListener("load", () => setIsContentLoading(false));

    return () => setIsContentLoading(false);
  }, [frame]);

  const hightlightWithLineNumbers = (input: any, language: any) =>
    highlight(input, language)
      .split("\n")
      .map(
        (line: any, i: number) =>
          `<span class='editorLineNumber'> ${i + 1}  </span>${line}`
      )
      .join("\n");

  return (
    <div className="container  !px-4 mx-auto my-20">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <Typography className="text-2xl text-primary" variant="h2">
            {title}
          </Typography>
          {isNew && (
            <Chip
              value="New Block"
              color="green"
              variant="ghost"
              className="!capitalize !text-base px-5 !py-3 bg-green-500/10 !font-medium text-green-500"
            />
          )}
        </div>
        <Typography
          className="w-full font-normal text-gray-600 lg:w-4/6"
          variant="paragraph"
        >
          {description}
        </Typography>
      </div>
      <Card className="border-2 shadow-none rounded-xl border-blue-gray-100">
        <div className="relative grid p-4 bg-transparent border-b rounded-t-xl border-blue-gray-50">
          <div className="absolute flex left-4 top-3">
            <Tooltip content="Desktop View">
              <IconButton variant="text" onClick={() => setDevice("desktop")}>
                <FaDesktop strokeWidth={1.5} className="w-6 h-6" />
              </IconButton>
            </Tooltip>
            <Tooltip content="Tablet View">
              <IconButton variant="text" onClick={() => setDevice("tablet")}>
                <FaTabletScreenButton strokeWidth={1.5} className="w-6 h-6" />
              </IconButton>
            </Tooltip>
            <Tooltip content="Mobile View">
              <IconButton variant="text" onClick={() => setDevice("mobile")}>
                <FaMobileAlt strokeWidth={1.5} className="w-6 h-6" />
              </IconButton>
            </Tooltip>
            <Tooltip content="Full Screen View">
              <Link
                href={version === "html" ? src.replace("react", "html") : src}
                target="_blank"
              >
                <IconButton variant="text">
                  <FaExpand strokeWidth={1.5} className="w-6 h-6" />
                </IconButton>
              </Link>
            </Tooltip>

            {/* if user has order */}

            <CopyToClipboard text={data} onCopy={() => setCopied(true)}>
              <div>
                <Tooltip content={copied ? "Copied" : "Copy Code"}>
                  <IconButton
                    variant="text"
                    disabled={isLoading}
                    onMouseLeave={() => {
                      setTimeout(() => setCopied(false), 1000);
                    }}
                  >
                    {copied ? (
                      <CheckIcon strokeWidth={1.5} className="w-6 h-6" />
                    ) : (
                      <FaRegCopy strokeWidth={1.5} className="w-6 h-6" />
                    )}
                  </IconButton>
                </Tooltip>
              </div>
            </CopyToClipboard>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            {/* if user has order */}

            <Menu open={isMenuOpen} handler={setIsMenuOpen}>
              <MenuHandler>
                <Button
                  variant="text"
                  className="flex items-center gap-2 px-3.5"
                >
                  {version === "react-ts" ? "react" : version}
                  <ChevronDownIcon
                    strokeWidth={4}
                    className={`h-2.5 w-2.5 transition-transform ${
                      isMenuOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="flex min-w-[106px] flex-col gap-1 rounded-lg p-1.5">
                <MenuItem
                  onClick={async () => {
                    if (version !== "html") {
                      const path = src
                        .replace("react", "html")
                        .replace("blocks", "code");

                      setVersion("html");
                      setIsMenuOpen(false);
                      await getCode(`${path}.html`);
                    }
                  }}
                >
                  HTML
                </MenuItem>
                {/* <MenuItem
                  onClick={async () => {
                    if (version !== "react") {
                      const path = src
                        .replace("react", "jsx")
                        .replace("blocks", "code");

                      setVersion("react");
                      setIsMenuOpen(false);

                      await getCode(`${path}.jsx`);
                    }
                  }}
                >
                  React
                </MenuItem> */}
                <MenuItem
                  onClick={async () => {
                    if (version !== "react-ts") {
                      const path = `/src/app${src}/page.tsx`;

                      setVersion("react-ts");
                      setIsMenuOpen(false);

                      await getCode(`${path}`);
                    }
                  }}
                >
                  React
                </MenuItem>
              </MenuList>
            </Menu>

            {/* if user has order */}

            <Tabs value={mode} className="h-10 w-max">
              <TabsHeader className="bg-blue-gray-50/50">
                <Tab
                  value="preview"
                  className="pb-[5px] pt-[6px]"
                  onClick={() => setMode("preview")}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex w-[86px] items-center justify-center gap-2 text-center font-medium transition-colors"
                  >
                    <EyeIcon strokeWidth={2} className="w-4 h-4 -mt-px" />
                    Preview
                  </Typography>
                </Tab>
                <Tab
                  value="code"
                  className="pb-[5px] pt-[6px]"
                  onClick={() => setMode("code")}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex w-[86px] items-center justify-center gap-2 text-center font-medium transition-colors"
                  >
                    <CodeBracketIcon
                      strokeWidth={2}
                      className="w-4 h-4 -mt-px"
                    />
                    Code
                  </Typography>
                </Tab>
              </TabsHeader>
            </Tabs>

            {/* if user ! has order */}
          </div>
        </div>
        <div
          className={`${
            mode === "preview" ? height || "h-[80vh]" : ""
          } relative overflow-hidden rounded-b-xl bg-blue-gray-50/50`}
        >
          {/* {isContentLoading && mode !== "code" && (
            <div className="absolute inset-0 z-10 grid w-full h-full bg-white place-items-center">
              <Spinner color="gray" className="w-8 h-8" />
            </div>
          )} */}
          <div
            className={
              mode === "preview" ? "h-full opacity-100" : "h-0 opacity-0"
            }
          >
            <Iframe src={src} />
          </div>
          {/* {isLoading && mode === "code" && (
            <div className="absolute inset-0 z-10 grid w-full h-full bg-white place-items-center">
              <Spinner color="gray" className="w-8 h-8" />
            </div>
          )} */}

          {/* if user has order */}

          <Editor
            value={data.trim()}
            onValueChange={() => null}
            // highlight={(newCode) =>
            //   hightlightWithLineNumbers(newCode, languages.tsx)
            // }
            highlight={(newCode) => highlight(newCode, languages.tsx)}
            padding={20}
            className="preview-panel-editor  h-max bg-[#1e293b] text-[#c9d1d9] outline-none focus:outline-none"
            style={{
              fontFamily: "monospace",
              fontWeight: 400,
              fontSize: 16,
            }}
          />
        </div>
      </Card>
    </div>
  );
}

export default PreviewPanel;
