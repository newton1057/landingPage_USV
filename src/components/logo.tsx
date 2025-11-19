import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  width?: string | number;
  height?: string | number;
};

export function Logo({ className, width = 80, height = 28 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 352 123"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
    >
      <path d="M22.5 0C34.9264 0 45 10.0736 45 22.5S34.9264 45 22.5 45 0 34.9264 0 22.5 10.0736 0 22.5 0Z" fill="currentColor"/>
      <path d="M123.504 45.3311V123H84.772V45.3311H123.504Z" fill="currentColor"/>
      <path d="M246.666 45.3311V123H207.934V45.3311H246.666Z" fill="currentColor"/>
      <path d="M184.238 88.083C158.455 88.083 137.93 67.1956 137.93 40.917V40.5H176.662V40.917C176.662 49.3394 184.444 56.4165 195.819 56.4165C207.194 56.4165 214.975 49.3394 214.975 40.917V40.5H253.707V40.917C253.707 67.1956 233.182 88.083 207.4 88.083C199.191 88.083 191.353 88.083 184.238 88.083Z" fill="currentColor"/>
      <path d="M307.25 123C278.503 123 255.434 99.4198 255.434 70.0415V45.332H294.166V70.0415C294.166 78.4639 300.913 85.541 309.122 85.541C317.33 85.541 324.077 78.4639 324.077 70.0415V45.332H352V70.0415C352 99.4198 332.228 123 307.25 123Z" fill="currentColor"/>
    </svg>
  );
}
