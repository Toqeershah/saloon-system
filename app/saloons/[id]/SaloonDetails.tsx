import { SaloonStatusBadge } from "@/app/components";
import { Saloon } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

const SaloonDetails = ({ saloon }: { saloon: Saloon }) => {
  return (
    <>
      <div>
        <Heading as="h2">{saloon.title}</Heading>
        <Flex className="space-x-4" my="4">
          <SaloonStatusBadge status={saloon.status} />
          <Text>{saloon.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose" mt="6">
          <ReactMarkdown>{saloon.description}</ReactMarkdown>
        </Card>
      </div>
    </>
  );
};

export default SaloonDetails;
