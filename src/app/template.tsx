import { MotionDiv } from "@/lib/framer";

export default function Template({ children }: { children: any }) {
    return (
        <MotionDiv initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            {children}
        </MotionDiv>
    );
};