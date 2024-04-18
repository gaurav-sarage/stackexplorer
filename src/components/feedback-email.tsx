import React from "react";

import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Tailwind,
    Text
} from "@react-email/components";

interface FeedbackEmailProps {
    email: string;
    feedback: string;
};

export const FeedbackEmail: React.FC<Readonly<FeedbackEmailProps>> = ({
    email,
    feedback
}) => {
    return (
        <Html>
            <Head />
            <Tailwind>
                <Body className="mx-auto my-auto bg-white font-sans">
                    <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
                        <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
                            You got a new message!
                        </Heading>
                        <Text className="text-[14px] leading-[24px] text-black">
                            Hello Gaurav,
                        </Text>
                        <Text className="text-[14px] leading-[24px] text-black">
                            You got an email from <strong>
                                {email}
                            </strong>.
                            <br />
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};