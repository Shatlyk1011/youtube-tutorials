
import type { FC, SVGProps } from "react";
import Button from "./button";

const DemoIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none" {...props}>
      <path
        d="M14.8638 0H6.47958C2.83777 0 0.666687 2.17 0.666687 5.81V14.18C0.666687 17.83 2.83777 20 6.47958 20H14.8538C18.4956 20 20.6667 17.83 20.6667 14.19V5.81C20.6767 2.17 18.5056 0 14.8638 0ZM15.9243 10.33C15.9243 10.74 15.5841 11.08 15.1739 11.08C14.7637 11.08 14.4235 10.74 14.4235 10.33V7.31L6.69969 15.03C6.54962 15.18 6.35952 15.25 6.16943 15.25C5.97933 15.25 5.78924 15.18 5.63916 15.03C5.34902 14.74 5.34902 14.26 5.63916 13.97L13.363 6.25H10.3415C9.9313 6.25 9.59113 5.91 9.59113 5.5C9.59113 5.09 9.9313 4.75 10.3415 4.75H15.1739C15.5841 4.75 15.9243 5.09 15.9243 5.5V10.33Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function ReusableButton() {
  return (
    <>
    <div className="flex flex-col justify-start items-center w-full min-h-svh">

        <h1 className="text-2xl mb-10 font-semibold tracking-tight inline-block ">Reusable Button Component in action</h1>
        <div className="flex flex-col items-start gap-5 ">
          <div className="flex gap-5 ">
            <Button variant="primary">Primary lg</Button>
            <Button variant="secondary">Secondary lg</Button>
            <Button variant="outline">Outline lg</Button>
            <Button variant="link" size="lg">Underline lg</Button>
          </div>

        <div className="flex gap-5  ">
          <Button variant="primary" size="md">Primary md</Button>
          <Button variant="secondary" size="md">Secondary md</Button>
          <Button variant="outline" size="md">Outline md</Button>
          <Button variant="link" size="md">Underline md</Button>
        </div>

          <div className="flex gap-5  ">
            <Button variant="outline" size="md">
              <div className="flex leading-[1.4] items-center gap-2.5">
                <DemoIcon/>
                Left icon
              </div>
            </Button>

            <Button variant="outline" size="md">
              <div className="flex leading-[1.4] items-center gap-2.5">
                Right icon
                <DemoIcon/>
              </div>
            </Button>

            <Button classes="bg-transparent" size="md">
              <div className="flex leading-[1.4] items-center gap-2.5">
                <DemoIcon/>
              </div>
            </Button>

            
          </div>
          <div className="flex gap-5  ">
            <Button variant="link" element="a" href="https://www.youtube.com/@devbyshat" size="md">
              Link 
            </Button>

            <Button variant="link" element="a" href="https://www.github.com/shatlyk1011" isExternal size="md">
              <div className="flex leading-[1.4] items-center gap-2.5">
                <DemoIcon className="w-4 h-4"/>
                External 
              </div>
            </Button>
            <Button classes="bg-pink-500 hover:bg-pink-600 px-4 py-2 text-sm trackin-wide rounded-full" size="md">With Custom Styles</Button>
          </div>


        </div>
    </div>
    </>
  );
}

