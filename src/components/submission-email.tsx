import React from 'react';

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from '@react-email/components';

interface SubmissionEmailProps {
  category: string;
  url: string;
}

export const SubmissionEmail: React.FC<Readonly<SubmissionEmailProps>> = ({
  category,
  url,
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              You got a message!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello Gaurav,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Category: {category}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Tech URL: {url}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
