import React, { useEffect, useState } from "react";
import ToolBox from "./ToolBox";

export default function ParentBox() {
    const [text, setText] = useState("");
    useEffect(() => {
        if (localStorage.getItem("textutils-lastSave")) {
            setText(localStorage.getItem("textutils-lastSave"));
        }
    }, []);
    const [letterCount, setLetterCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [lineCount, setLineCount] = useState(0);
    const [time, setTime] = useState(0);
    const [memory, setMemory] = useState(0);
    const [textSize, setTextSize] = useState(3);
    const PLACEHOLDER = `Enter Your Text here...
  
Welcome to Text Utils 📝

You can see letter count, word count, line count, text read time, and text memory size in Statistics section.
You can also set text size according to your requirement and change theme of your choice.

What is Magic Spell? [BETA]
Need an article in 1000 words  and are you stuck in 960? Using Magic Spell will add related characters to the article, making the article even longer. 
Try this on everything, not just the article. Stories, letters, covers, etc.

Wrote something important but forgot to save? Don't worry, we got your back. Your text is saved automatically in your device.

It works on all devices, Sounds good? Well there is lot more to come. 
`;
    useEffect(() => {
        setLetterCount(text.length);
        localStorage.setItem("textutils-lastSave", text);
        if (text.length > 0 && text != " ") {
            setWordCount(text.match(/(\w+)/g).length);
            setLineCount(text.split(/\r\n|\r|\n/).length);
            setTime(text.length / 200);
            setMemory(Math.round((text.length * 0.001 + Number.EPSILON) * 100) / 100);
        } else {
            setWordCount(0);
            setLineCount(0);
            setTime(0);
            setMemory(0);
        }
    }, [text]);
    function decreaseTextSize() {
        if (textSize > 1) {
            setTextSize(textSize - 1);
        }
    }
    function increaseTextSize() {
        if (textSize < 8) {
            setTextSize(textSize + 1);
        }
    }
    useEffect(() => {
        let textAreaStyle = document.getElementById("textarea").style;
        if (textSize === 1) {
            textAreaStyle.fontSize = "0.875rem";
            textAreaStyle.lineHeight = "1.25rem";
        }
        if (textSize === 2) {
            textAreaStyle.fontSize = "1rem";
            textAreaStyle.lineHeight = "1.5rem";
        }
        if (textSize === 3) {
            textAreaStyle.fontSize = "1.125rem";
            textAreaStyle.lineHeight = "1.75rem";
        }
        if (textSize === 4) {
            textAreaStyle.fontSize = "1.25rem";
            textAreaStyle.lineHeight = "1.75rem";
        }
        if (textSize === 5) {
            textAreaStyle.fontSize = "1.5rem";
            textAreaStyle.lineHeight = "2rem";
        }
        if (textSize === 6) {
            textAreaStyle.fontSize = "1.75rem";
            textAreaStyle.lineHeight = "2.25rem";
        }
        if (textSize === 7) {
            textAreaStyle.fontSize = "2rem";
            textAreaStyle.lineHeight = "2.5rem";
        }
    }, [textSize]);

    return (
        <>
            <div className="flex flex-col pb-14 md:pb-0 md:flex-row">
                <div className="my-2 py-4 self-start">
                    <textarea
                        name=""
                        id="textarea"
                        cols="30"
                        rows="10"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder={PLACEHOLDER}
                        className="bg-transparent outline-none text-xl pr-2 selection:bg-fuchsia-500 selection:text-fuchsia-50"
                    ></textarea>
                </div>
                {/* Text Stats */}
                <div className="text-stats w-full h-max flex flex-col items-center justify-center text-center">
                    <p className="flex-row flex text-3xl font-normal select-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.2}
                                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                            />
                        </svg>
                        Statistics
                    </p>
                    <div className="flex flex-col select-none">
                        <p className="mt-4">{letterCount} characters</p>
                        <p className="mt-4">{wordCount} words</p>
                        <p className="mt-4">{lineCount} lines</p>
                        <p className="mt-4">{time} minutes</p>
                        <p className="mt-4">{memory} Kb</p>
                    </div>
                    <p className="flex-row flex text-3xl font-normal mt-9 select-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.2}
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                            />
                        </svg>
                        Text Size
                    </p>
                    <div className="flex flex-row mt-2">
                        <div
                            className="mx-1 cursor-pointer hover:scale-105 active:scale-100 transform transition-all ease-in-out duration-100"
                            onClick={decreaseTextSize}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <div
                            className="mx-1 cursor-pointer hover:scale-105 active:scale-100 transform transition-all ease-in-out duration-100"
                            onClick={increaseTextSize}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    {/* Styled checkbox ~ customised */}
                    {/* <input type="checkbox" id="switch" className="mt-2" />
        <label for="switch" onClick={() => setAutoCorrect(!autoCorrect)}>
        </label> */}
                </div>
            </div>
            <ToolBox text={text} setText={setText} />
        </>
    );
}
